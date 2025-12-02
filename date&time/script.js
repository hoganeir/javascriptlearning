//  let d;

//  d = new Date();

//  d = d.toString();

//  d = new Date(2021, 0, 10, 12, 30);

//  d = new Date('2021-07-10T12:30:00');
//  d = new Date('07/10/2021 12:30:00');
//  d = new Date('2022-07-10');
//  d = new Date('-7-10-2022')

//  // time stamps, time stamps in milliseconds
//  d = Date.now();

//  d = new Date();
//  d = d.getTime()
//  d = d.valueOf();

//  d = new Date(1762816582315);

// d = Math.floor(Date.now() / 1000);

//  console.log(d);

 //Date object methods
 let x;
 let d = new Date();

 x = d.toString();

 x = d.getTime();
 x = d.valueOf();

 x = d.getFullYear();

 // months are zero based, returns 10 for november, 0 is january
 x = d.getMonth();

 // get month
 x = d.getDate();

 // get day of the week, zero based 1 is monday 0 is sunday
 x = d.getDay();

 x = d.getHours();

 x = d.getMinutes();

 x = d.getSeconds();

 x = d.getMilliseconds();

 // date in string format
 x = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDate()}`;

 x = Intl.DateTimeFormat('en-US').format(d);
 x = Intl.DateTimeFormat('en-GB').format(d);
 x = Intl.DateTimeFormat('default').format(d);

 // write out month
 x = Intl.DateTimeFormat('default', { month: 'long'}).format(d);

 // write out shorthand month
 x = d.toLocaleString('default', { month: 'short' });

 

 console.log(x);