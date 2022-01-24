const sample1 = [  
    "GALAXY-42/SYSTEM/PLANET:{}",  
    "GALAXY-42/SYSTEM/PLANET:{Code}",  
    "GALAXY-42/System/PLANET:{Code}",  
    "GALAXY-42/SYSTEM/PLANET{Code}",  
    "LONGGALAXY-42/SYSTEM/PLANET:{Code}",  
    "GALAXY-4/SYSTEM/PLANET:{Code}",  
    "GALAXY-4815162342/SYSTEM/PLANET:{Code}",  
    "GALAXY-42/THE-SOLAR-SYSTEM/PLANET:{Code}",  
    "GALAXY-42/-SYSTEM/PLANET:{Code}",  
    "GALAXY-42/SYSTEM1/PLANET:{Code}",  
    "GALAXY-42/SYS--TEM/PLANET:{Code}",  
    "GALAXY-42/LANGUAGE/JAVA:{Code}",  
    "GALAXY-42/LANGUAGE/SCALA:{Code}",  
    "GALAXY-42/LANGUAGE/JS:{Code}",  
    "GALAXY-42/LANGUAGE/PYTHON:{Code}",  
    "GALAXY-42/SYSTEM/PLANET:{Simple text... @null == undefined@}",  
    "GALAXY-42/SYSTEM/PLANET:{@typeof null@@typeof typeof null@}"  
]

const test1 = 
[  
    "GALAXY-42/SYSTEM/PLANET:{}",  
    "GALAXY-42/SYSTEM/PLANET:{Code}",  
    "GALAXY-42/THE-SOLAR-SYSTEM/PLANET:{Code}",  
    "GALAXY-42/LANGUAGE/JS:{Code}",  
    "GALAXY-42/LANGUAGE/PYTHON:{Code}",  
    "GALAXY-42/SYSTEM/PLANET:{Simple text... <spam>null == undefined</spam>}",  
    "GALAXY-42/SYSTEM/PLANET:{<spam>typeof null</spam><spam>typeof typeof null</spam>}"  
];

/** @param {string} input */
const spamFilter = (input) => {
    let res = input.filter(i => {
        // const [galaxy, system, planet] = i.split('/');
        const galaxyRegex = /^[a-zA-Z]{2,8}-\d{2,8}\//g;
        const galaxyMatch = i.match(galaxyRegex);

        const galaxySystemRegex = /^[a-zA-Z]{2,8}-\d{2,8}\/[A-Z-]+\/(?:([A-Z])(?!.*\1))+:{.*}/g;
        const galaxySystemMatch = i.match(galaxySystemRegex);
        // console.log(galaxySystemMatch);
        if (galaxySystemMatch) {
            if (galaxySystemMatch[0].includes('--')) return false;
            const first = galaxySystemMatch[0].split('/')[1];
            if (first[0] === '-' || first[first.length - 1] === '') return false;
        }
        if (!galaxyMatch) return false;
        if (!galaxySystemMatch) return false;

        return true
    }).map((i, idx) => {

        let s = i.replace(/@(.*?)@/g, (match) => {
            const item = match.replace('@', '').replace('@', '');

            return `<spam>${item}</spam>`
        });

        console.log(test1[idx] === s);
        return s
    })

    // console.log(res);

    return res;
}

spamFilter(sample1)
