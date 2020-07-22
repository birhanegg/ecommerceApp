const cron = require("node-cron");

const User = require("../models/Buyer");

const orderModel = require("../models/Order")
const productModel = require("../models/Product")
const cronConfig = require('../config/cronConfig');


const moment = require('moment');


exports.run = () => {
    //0 0 0 * * * //mid night
   // cron.schedule("*/4 * * * * * ", function () {
    cron.schedule("*/4 * * * * * ", function () {

        orderModel.find({
            "status": "Done"
        }).then(orders => {

                orders.forEach(function (order) {

                    const dateNow = new Date();
                    let today = new Date(),
                        deliveredDates = order.deliveredDate,
                        timeDifference = Math.abs(today.getTime() - deliveredDates);

                    let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

                  //  const dateDifference = dateNow - order.deliveredDate


                    // 20 days
                    if (differentDays >= cronConfig.duration) {

                        console.log("today : " + today)
                        console.log("order.deliveredDate : " + order.deliveredDate);
                        console.log('produid', order.buyerId)
                        console.log('differentDays', differentDays)

                        User.updateOne({
                            _id: order.buyerId
                        }, {
                            $inc: {
                                gainedPoints: 10
                            }
                        }, function (err, data) {
                            if(err)
                                console.log(err)
                        })

                        orderModel.updateOne({
                            _id: order._id
                        }, {
                            status: 'Done'
                        }, function (err, data) {
                            if(err)
                                console.log(err)
                        })
                    }
                });
            })
            .catch(err => console.log("no status: delivered", err));
        console.log("---------------------");
        console.log("Running Cron Job");
        console.log("------------------------");

    });
}
