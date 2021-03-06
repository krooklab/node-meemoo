/*global Stats:true*/

// extends src/nodes/time.js which extends src/node-box-native-view.js

$(function(){

  var template =
      '<img src="" class="image" style="width:100%">'+
      '<div class="label" style="text-align:center"></div>';

  Iframework.NativeNodes["ui-image"] = Iframework.NativeNodes["ui"].extend({

    template: _.template(template),
    info: {
      title: "Image",
      description: "a fast image box with a src attribute"
    },
    initializeModule: function(){
      this.$(".button").button();
    },
    inputsrc: function(val){
      this._val = val;
      this.$(".image").attr("src",val);
      this.send("src", this._val);
    },
    inputlabel: function(label){
      this.$(".label").text(label);
    },
    inputs: {
      src: {
        type: "string",
        description: "src of the image"
      },
      label: {
        type: "string",
        description: "label of the image"
      }
    },
    outputs: {
      src: {
        type: "string"
      }
    }

  });


});
