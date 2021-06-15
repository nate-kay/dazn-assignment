const controller = {

    testController: null,
    captureResolver: null,
    getResolver: null,

    capture: function(t) {
        controller.testController = t;

        if (controller.getResolver) {
            controller.getResolver(t);
        }

        return new Promise(function(resolve) {
            controller.captureResolver = resolve;
        });
    },

    free: function() {
        controller.testController = null;

        if (controller.captureResolver) {
            controller.captureResolver();
        }
    },

    get: function() {
        return new Promise(function(resolve) {
            if (controller.testController) {
                resolve(controller.testController);
            } else {
               controller.getResolver = resolve;
            }
        });
    },
};

module.exports = controller;
