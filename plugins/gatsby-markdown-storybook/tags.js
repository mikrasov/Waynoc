const util = require(`./ast-util`)


module.exports = {
    prompt (node, scope, state) {
        scope.prompt = util.wrapIntoTree(node.children)
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

        return util.htmlNode("check",node.properties, node.children)
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
