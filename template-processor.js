"use strict";
///////////////////////////////
function TemplateProcessor(template) {
    this.template = template;
  }
  
  TemplateProcessor.prototype.fillIn = function(dictionary) {
    var regex = /{{(.*?)}}/g;
    return this.template.replace(regex, function(match, property) {
      return dictionary[property] || '';
    });
  };