export let journeyList = [{
    fromZone: 1,
    toZone: 2,
    day: 'monday',
    time: '7:30',
  },{
    fromZone: 1,
    toZone: 2,
    day: 'saturday',
    time: '9:30',
  }]
  
export let fareRules = [{
    from : 1,
    to: 1,
    peak: 30,
    offPeak: 25,
  },{
    from : 1,
    to: 2,
    peak: 35,
    offPeak: 30,
  },{
    from : 2,
    to: 1,
    peak: 35,
    offPeak: 30,
  },{
    from : 2,
    to: 2,
    peak: 25,
    offPeak: 20,
  }]

export let peakTimings = [{
    days: ['monday','tuesday', 'wednesday', 'thursday', 'friday'],
    timePeriod: [{
      start: '07:00',
      end: '10:30'
    },{
      start: '17:00',
      end: '20:00'
    }]
  },{
    days: ['saturday', 'sunday'],
    timePeriod: [{
      start: '09:00',
      end: '11:00'
    },{
      start: '18:00',
      end: '22:00'
    }]
  }]

export let offPeakTimings = [{
    days: ['monday','tuesday', 'wednesday', 'thursday', 'friday'],
    timePeriod: [{
      start: '17:00',
      end: '20:00'
    }]
  },{
    days: ['saturday', 'sunday'],
    timePeriod: [{
      start: '18:00',
      end: '22:00'
    }]
  }]