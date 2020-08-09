const util = require(`./ast-util`)
const _ = require("lodash")

module.exports = {
    next (node, scope, state) {
        scope.next = node.properties.event
        return util.textNode()
    },

    prompt (node, scope, state) {
        scope.prompt = node.properties.text
        return util.textNode()
    },

    mod (node, scope, state) {

        scope.effects.push({
            type: "mod",
            stat:  node.properties.stat,
            value:  node.properties.value,
        })

        return util.htmlNode("mod", node.properties)
    },

    set (node, scope, state) {
        scope.effects.push({
            type: "set",
            stat:  node.properties.stat,
            value:  node.properties.value
        })

        return util.htmlNode("set", node.properties)
    },


    check (node, scope, state) {

        const stat = node.properties.stat
        const value = node.properties.value

        if(_.get(state.stats, stat) >= value) {
            return util.htmlNode("check", node.properties, node.children)
        }
        else{
            return util.htmlNode("check", node.properties, node.otherwise)
        }
    },


    choice (node, scope, state) {

        scope.choices.push({
            label: node.properties.label,
            selected: util.wrapIntoTree(node.children),
            otherwise: util.wrapIntoTree(node.otherwise)
        })
        return util.textNode()

    },

}
