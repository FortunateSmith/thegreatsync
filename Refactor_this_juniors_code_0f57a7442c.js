function calculateShipping() {
    var package1 = {
        weight: 5,
        dimensions: {
            length: 10,
            width: 5,
            height: 8,
        },
    };

    var package2 = {
        weight: 12,
        dimensions: {
            length: 15,
            width: 12,
            height: 10,
        },
    };

    var package3 = {
        weight: 8,
        dimensions: {
            length: 7,
            width: 4,
            height: 6,
        },
    };

    var package4 = {
        weight: 20,
        dimensions: {
            length: 18,
            width: 12,
            height: 14,
        },
    };

    var package5 = {
        weight: 16,
        dimensions: {
            length: 14,
            width: 10,
            height: 12,
        },
    };

    var shippingMethod1 = "standard";
    var shippingMethod2 = "express";
    var shippingMethod3 = "overnight";
    var shippingMethod4 = "overnight";
    var shippingMethod5 = "standard";

    var cost1;
    if (shippingMethod1 === "standard") {
        if (package1.weight <= 10) {
            cost1 = 10;
        } else {
            cost1 = 15;
        }
    } else if (shippingMethod1 === "express") {
        if (package1.weight <= 10) {
            cost1 = 20;
        } else {
            cost1 = 25;
        }
    } else if (shippingMethod1 === "overnight") {
        if (package1.weight <= 10) {
            cost1 = 40;
        } else {
            cost1 = 45;
        }
    }

    var cost2;
    if (shippingMethod2 === "standard") {
        if (package2.weight <= 10) {
            cost2 = 10;
        } else {
            cost2 = 15;
        }
    } else if (shippingMethod2 === "express") {
        if (package2.weight <= 10) {
            cost2 = 20;
        } else {
            cost2 = 25;
        }
    } else if (shippingMethod2 === "overnight") {
        if (package2.weight <= 10) {
            cost2 = 40;
        } else {
            cost2 = 45;
        }
    }

    var cost3;
    if (shippingMethod3 === "standard") {
        if (package3.weight <= 10) {
            cost3 = 10;
        } else {
            cost3 = 15;
        }
    } else if (shippingMethod3 === "express") {
        if (package3.weight <= 10) {
            cost3 = 20;
        } else {
            cost3 = 25;
        }
    } else if (shippingMethod3 === "overnight") {
        if (package3.weight <= 10) {
            cost3 = 40;
        } else {
            cost3 = 45;
        }
    }

    var cost4;
    if (shippingMethod4 === "standard") {
        if (package4.weight <= 10) {
            cost4 = 10;
        } else {
            cost4 = 15;
        }
    } else if (shippingMethod4 === "express") {
        if (package4.weight <= 10) {
            cost4 = 20;
        } else {
            cost4 = 25;
        }
    } else if (shippingMethod4 === "overnight") {
        if (package4.weight <= 10) {
            cost4 = 40;
        } else {
            cost4 = 45;
        }
    }

    var cost5;
    if (shippingMethod5 === "standard") {
        if (package5.weight <= 10) {
            cost5 = 10;
        } else {
            cost5 = 15;
        }
    } else if (shippingMethod5 === "express") {
        if (package5.weight <= 10) {
            cost5 = 20;
        } else {
            cost5 = 25;
        }
    } else if (shippingMethod5 === "overnight") {
        if (package5.weight <= 10) {
            cost5 = 40;
        } else {
            cost5 = 45;
        }
    }

    console.log("Package 1 shipping cost: $" + cost1);
    console.log("Package 2 shipping cost: $" + cost2);
    console.log("Package 3 shipping cost: $" + cost3);
    console.log("Package 4 shipping cost: $" + cost4);
    console.log("Package 5 shipping cost: $" + cost5);
}

calculateShipping();