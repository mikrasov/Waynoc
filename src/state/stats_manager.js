import _ from "lodash"
function processMeta(loadedMeta, parent){
    let metaDictionary = {}
    const prefix = parent?parent.key+".":""

    //Take meta and copy it to children
    if(loadedMeta) loadedMeta.forEach( stat => {

        const statMeta = {
            ...parent,
            ...stat,
            parent: parent?.key,
            path: prefix+stat.key,
            isBinary: (stat.max - stat.min === 1),
            leaf: !stat?.sub,
            sub: stat.sub?stat.sub.map(s=>stat.key+"."+s.key):[]
        }

        metaDictionary = {
            ...metaDictionary,
            [prefix+statMeta.key]: statMeta,    //Add stat to list of Stat Metas
            ...processMeta(stat.sub, statMeta)  //Add all children to list of Stat Metas
        }
    })
    return metaDictionary
}

export function readyStats(loadedMeta){
    const stats_meta = processMeta(loadedMeta)

    //Set stats to initial values
    const stats = {}
    for (const [statPath, meta] of Object.entries(stats_meta)) {
        if(meta.leaf)
            _.set(stats, statPath, meta.initial)
    }

    return {stats, stats_meta}
}
