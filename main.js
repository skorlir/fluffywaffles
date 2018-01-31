// Events.
const listeners = {
  'drop_fall': [],
  'loader_die': []
}

function trigger (state_evt, args) {
  listeners[state_evt].forEach(l => l.fn.apply(null, args))
}

function on (state_evt, listener) {
  listeners[state_evt].push(listener)
  return listeners.length-1
}

function off (state_evt, index) {
  listeners.splice(index, 1)
}

function kill (state_evt) {
  listeners[state_evt].length = 0
}

// Fancy wuffles.
/* BUG(jordan): One irritating bug persists in this, even through all the tweaking. Sometimes the
 *   timing is off juuuust enough that a drop will not have a chance to compress at the end of its
 *   fall before the next begins falling, and so it will appear to disappear instead of cleanly
 *   dissipating into the "ground." Not very noticeable, but very frustrating.
 */
var base_amplitude = 20
  , periods = (Math.random() * 2 + 3)|0
  , period = (160 / periods)|0
  , freq = (Math.PI * 2) / period

console.log(`Syrup parameters:
    base amplitude: ${base_amplitude}
    periods:   ${periods} (varying 3 → 5 [very rarely 6])
    period:    ${period}
    freq:      ${freq}
`)

var pts = Array(periods*period*2|0).fill(0)
var dollop_pts = []

console.log(`Generating cosine drips...`)
var amplitude, x, y
for (i = 0; i < periods*period|0; i++) {
  if (i % (period|0) == 0) {
    amplitude = (Math.random()*(15) + 25)
    console.log(`
    Drip: ${i/period|0}
      new amplitude: ${amplitude} (varying 1x → 2x of base)
    `)
  }
  pts[2*i] = x = i
  pts[2*i + 1] = y = (amplitude * Math.cos(freq * (i + (period/2)|0)) + amplitude)
  if (i % (period|0) == (period/2|0)) {
    // "peak" (dip)
    var dollop_radius = 10 * 1 / periods
    console.log(`
      create dollop w/ radius: ${dollop_radius}
      at offset x: ${x} y: ${y}
    `)
    dollop_pts.push({ r: dollop_radius, x: x, y: y })
  }
}
console.log(`Drips generated.`)

var paths = Array(periods)
console.log(`Slicing drips into individuals...`)
for (p = 0; p < periods; p++) {
  console.log(`Slice: ${p}
    From ${2*(p*period|0)}
    To   ${2*(p*period + period|0)}
  `)
  paths[p] = pts.slice(2*(p*period|0), 2*(p*period + period|0))
}
console.log(`Drips sliced.`)

console.log(`Create the SVG using Snap.`)
var paper = Snap('#melt-svg')
var drips = [], drops = []

console.log(`Adding each path to Paper...`)
for (let path of paths) {
  console.log(`
    new polyline: ${path}
    drips.push(...)
  `)
  var drip = paper.polyline(path)
  drip.attr({
    fill: '#ffd200',
  })
  drip.addClass('drip')
  drips.push(drip)
}
console.log(`Drips added.`)

console.log(`Adding each drop to Paper...`)
for (let drop_struct of dollop_pts) {
  let { r, x, y } = drop_struct
  let drop = paper.circle(x, y, r)
  drop.attr({
    fill: 'transparent'
  })
  drop.data('max_r', r)
  drop.addClass('drop')
  drops.push(drop)
}
console.log(`Drops added.`)

console.log(`Group drips with drops...`)
var dripdrops = []
for (let [ drip, drop ] of drips.map((d, i) => [d, drops[i]])) {
  console.log(`
    Grouping drip ${drip}
             drop ${drop}
  `)
  dripdrops.push(paper.g(drip, drop))
}
console.log(`Drip-drops grouped.`)

function randomScaleTransform () {
  return (0.7*Math.random()) + 0.65
}

function dribble (dripdrop, after) {
  let drip = dripdrop.select('.drip')
  let scaleY = randomScaleTransform()
    , diff   = scaleY - drip.data('scaleY')
  if (diff < -0.15) {
    const xy = paths[drips.indexOf(drip)]
    const ix = period/2|0
    const evt_params =
      xy.slice(ix, ix+2)
        .concat([ scaleY, Math.abs(diff), drops[drips.indexOf(drip)] ])
    // FIXME(jordan): this may be triggered while a drop is already falling, causing it to disappear
    // when its drop starts over. We might be able to generate drops instead of doing things the way
    // we do currently, where each one is created once and then reused. It's another cache
    // invalidation bug! Well, indirectly. At least it's actually one of the "hard things".
    trigger('drop_fall', evt_params)
  }
  drip.data('scaleY', scaleY)
  drip.animate({
      transform: (new Snap.Matrix()).scale(1, scaleY)
    },
    1000, n => {
      // NOTE(jordan): Wonky sinusoidal timing function looks nice.
      return 0.5*(Math.sin((n - 0.5) * Math.PI) + 1)
    }, after)
}

on('drop_fall', {
  fn: function (x, y, scaleY, magnitude, drop) {
    console.log('drop fall!!', x, scaleY*y)

    const adjustedRadius = 0.75 /* magickk */ * drop.data('max_r') * (magnitude+1)

    const yOffset =
        scaleY * drop.attr('cy')
      - 1.75 /* magic numberrr */ * drop.attr('cy')
      - drop.attr('max_r')
    //---------------------------------------------
    //= yOffset

    const txf = new Snap.Matrix()
      .scale(1, 2.5)
      .translate(0, yOffset)

    drop.attr({
      fill: '#ffd200',
      transform: txf,
      r: adjustedRadius
    })
    drop.animate({
      r: drop.data('max_r')*(magnitude+1),
      transform: (new Snap.Matrix()).translate(0, 150 - drop.attr('cy'))
    }, 1000, null, _ => {
      drop.animate({
        r: 0
      }, 500)
    })
    console.log(drop)
  }
})

function dribbleUntilInterrupt (dripdrop) {
  let stopSignal = false
  function noop () {}

  function x () {
    dribble(dripdrop, stopSignal ? noop : x)
  }
  dribble(dripdrop, x)

  on('loader_die', {
    fn: _ => {
      stopSignal = true
    }
  })
}

console.log(`Start perpetually dribbling all drips.`)
dripdrops.map((d, i) => {
  setTimeout(_ => dribbleUntilInterrupt(d), i*1000/periods)
})

/* After "loading" is finished (ie after I feel like you've appreciated my loader)...
 *   Let's move everything into a header-type-deal. WAFFLES witha WIGGLE.
 *   We can do the transitioning using CSS classes. Once the load ends, kill the animation.
 */
