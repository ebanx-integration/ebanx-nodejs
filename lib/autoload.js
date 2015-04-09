module.exports = function() {

  return {

    cancel : require("./resources/Cancel"),
    capture : require("./resources/Capture"),
    direct : require("./resources/Direct"),
    exchange : require("./resources/Exchange"),
    print : require("./resources/Print"),
    query : require("./resources/Query"),
    refund : require("./resources/Refund"),
    refund_or_cancel : require("./resources/RefundOrCancel"),
    request : require("./resources/Request"),
    token : require("./resources/Token"),
    zipcode : require("./resources/Zipcode"),
    utils : require("./Utils")

  };
};