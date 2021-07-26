import moment from 'moment';
import * as dummyData from '../dummyData.mjs'

/**
* @Function Name: "checkPeakHours",
* @Purpose: "To check whether the time is under peak hours or not",
* @Returns Boolean: true, false
* @Author: "Aniket Gupta"
*/
function checkPeakHours(time, data) {
  let peakHours = false;
  data.timePeriod.forEach((item)=> {
    let format = 'hh:mm'
    let journeyTime = moment(time, format),
    beforeTime = moment(item.start, format),
    afterTime = moment(item.end, format);
    if ((journeyTime.isBetween(beforeTime, afterTime, null, [])) && peakHours === false) {
      peakHours = true;
    }
  })
  return peakHours;
}

/**
* @Function Name: "totalFare",
* @Purpose: "To get the total fare of the journey",
* @Response Object: Success- {status : true, data}, Failure- {status : false, error},
* @Author: "Aniket Gupta"
*/
export function totalFare(req, res) {
  let totalFare = 0;
  dummyData.journeyList.forEach((item)=> {
    let timingsObj = {}
    if (item.fromZone !== 1 && item.toZone === 1) {
      timingsObj = dummyData.offPeakTimings.find(x => x.days.includes(item.day));
    } else {
      timingsObj = dummyData.peakTimings.find(x => x.days.includes(item.day));
    }
    let peakHrStatus = checkPeakHours(item.time, timingsObj);
    let fareData = dummyData.fareRules.find(f => (item.fromZone === f.from && item.toZone === f.to));
    if (peakHrStatus) {
      totalFare = totalFare + fareData.peak;
    } else {
      totalFare = totalFare + fareData.offPeak;
    }
  })
  res.status(200)
  res.send({'Journey Details': dummyData.journeyList, 'Total Fare': totalFare})
}