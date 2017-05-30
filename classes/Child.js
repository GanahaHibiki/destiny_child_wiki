/**
 * @class
 * constructor of class Child
 * @param {object}  mProps
 * @param {String}  mProps.name         name of the child
 * @param {String}  mProps.type         type of the Child: 'A' for Attack, 'S' for Shield, 'H' for healer, 'B' for buff adder, 'D' for debuff adder
 * @param {String}  mProps.atk          attack
 * @param {String}  mProps.skill skill  text
 * @param {String}  mProps.slideSkill   slide skill text
 * @param {String}  mProps.driveSkill   drive skill text
 * @param {String}  mProps.leaderSkill  leader skill text
 * @param {Array}   mProps.tags          array of tags on this child
 * 
 */
function Child(mProps) {
    this.name = mProps.name;
    this.type = mProps.type;
    this.atk = mProps.atk;
    this.skill = mProps.skill;
    this.slideSkill = mProps.slideSkill;
    this.driveSkill = mProps.driveSkill;
    this.leaderSkill = mProps.leaderSkill;
    this.tags = mProps.tags;
}

Child.prototype.getName = function() {
    return this.name;
}

Child.prototype.setName = function(sName) {
    this.name = sName;
    return this;
}

Child.prototype.getType = function() {
    return this.type;
}

Child.prototype.setType = function(sType) {
    if (sType === 'A' || 'S' || 'H' || 'B' || 'D') {
        this.type = sType;
    } else {
        console.error("Illeagal 'Type' input!");
    }

    return this;
}