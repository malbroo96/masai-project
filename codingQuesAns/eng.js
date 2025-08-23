let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence: function () {
        return (this.subject && this.verb && this.object)
            ? `${this.subject} ${this.verb} ${this.object}`
            : "Incomplete sentence";
    },

    updateProperty: function (property, value) {
        return (property in this)
            ? (this[property] = value)
            : "Invalid property";
    }
};

console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty('subject', 'we');
sentenceBuilder.updateProperty('verb', 'are');
sentenceBuilder.updateProperty('object', 'playing');
console.log(sentenceBuilder.buildSentence());