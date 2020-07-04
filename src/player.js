export default class {
    constructor(){
        this.name = ""
        this.age = 0

        this.intelligence = -10
        this.perception = -10
        this.strength = -10
        this.stamina = -10
        this.presence = -10
        this.communication = -10
        this.dexterity = -10
        this.quickness = -10
    }

    change_name(name){
        this.name = name
        return "Your name is " + name
    }

    increase_intelligence() {
        this.intelligence += 1
        return "+1 Int"
    }

    increase_perception() {
        this.perception += 1
        return "+1 Per"
    }

    increase_strength() {
        this.strength += 1
        return "+1 Str"
    }

    increase_stamina() {
        this.stamina += 1
        return "+1 Sta"
    }

    increase_presence() {
        this.presence += 1
        return "+1 Prs"
    }

    increase_communication() {
        this.communication += 1
        return "+1 Com"
    }

    increase_dexterity() {
        this.dexterity += 1
        return "+1 Dex"
    }

    increase_quickness() {
        this.quickness += 1
        return "+1 Qik"
    }
}
