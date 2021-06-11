export const utils = {
    getWaterState : function(item){
        if(item.waterLevel < item.criticalLowWL){
            return require("./assets/icons/drop_red.png")
        }else if(item.waterLevel > item.criticalHighWL){
            return require("./assets/icons/drop_blue.png")
        }else if(item.waterLevel > item.criticalLowWL && item.waterLevel < item.criticalHighWL){
            return require("./assets/icons/drop_green.png")
        }
    },
    getSunState : function(item){
        if(item.lightLevel > item.criticalHighLL){
            return require("./assets/icons/sun_red.png")
        }else if(item.lightLevel < item.criticalLowLL){
            return require("./assets/icons/sun_grey.png")
        }else if(item.lightLevel > item.criticalLowLL && item.lightLevel < item.criticalHighWL){
            return require("./assets/icons/sun_yellow.png")
        }
    }
}