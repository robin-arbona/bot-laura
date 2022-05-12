import nodeCron from "node-cron";
import { run } from './buyers.js'
 
//  # ┌────────────── second (optional)
//  # │ ┌──────────── minute
//  # │ │ ┌────────── hour
//  # │ │ │ ┌──────── day of month
//  # │ │ │ │ ┌────── month
//  # │ │ │ │ │ ┌──── day of week
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *

//   '* * 19 12 * *'

nodeCron.schedule('1 * * * * *', async () => {
    console.log('-- Launch at ', new Date().toISOString(), ' --');

    await run()

    console.log('-- end ', new Date().toISOString()), ' --';

})