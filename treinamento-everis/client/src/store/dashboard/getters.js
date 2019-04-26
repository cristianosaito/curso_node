import { 
    groupBy
} from 'lodash'

export default{
    userList(state, getter, rootState){
        return rootState.Users.list
    },
    formatedUserList(state, getter){
        return getter.userList.map(u =>{
            return {
                ...u,
                // salary: fSalary(u)
            }
        })
    },
    insighUsers(state, getter, rootState, rootGetters){
        const { name = '' } = rootGetters["Users/lastRegisteredUSer"] || {}
        return { 
            variant: 'blue',
            data: {
                title: 'Registered users',
                footerTitle: 'Last logged in user',
                mainData: getter.userList.length,
                footerData: name
            }
        } 
    },
    insighCompany(state, getter){
        const { list } = getter.companyData
        const topCompany = list.length > 0 ? list[0] : 'None' 
        return { 
            variant: 'green',
            data: {
                title: 'Companies in the system',
                footerTitle: 'Company with more employees',
                footerData: topCompany.company,
                mainData: list.length 
            } 
        }
    },
    insighSalary(state, getter){
        
        let defaultData = { 
            variant: 'pink',
            data: {
                title: 'Companies in the system',
                footerTitle: '',
                mainData: '', 
                footerData: ''
            } 
        }
        const listSalary = getter.companyData.list
            .reduce((acc,cur) => acc.concat(cur.users),[])
            .sort((a,b) => a.salary > b.salary ? 1 : -1)

        if (listSalary.length) {
            const lowest = listSalary.length > 0 ? listSalary[0] : { name: 'None', salary: 0 }
            const highest = listSalary[listSalary.length - 1]
        
            const maxWords = ({ name },n) => `${name.substr(0,n)}...`
            
            const highestMessage = `Highest salary: ${maxWords(highest,10)} || R$ ${fSalary(highest)}`
            // const leftMessage = `Highest salary: ${maxWords(highest,10)} ||  salary: R$${maxWords(lowest,10)}`
            const lowestMessage = `Lowest salary: ${maxWords(lowest,10)} || R$ ${fSalary(lowest)}`
    
            return {
                ...defaultData,
                data: {
                    ...defaultData.data,
                    footerTitle: highestMessage,
                    mainData: listSalary.length, 
                    footerData: lowestMessage
                }
            }
            
        } else{
            return defaultData
        }      

       
    },
    allInsights(state, getter){
        const { insighUsers, insighCompany, insighSalary } = getter
        return [ insighUsers, insighCompany, insighSalary ]
    },
    companyData(state, getter){
        let ascOrder = (a,b) => a.users.length > b.users.length ? -1 : 1
        let list = formatedUserList(getter.userList).sort(ascOrder)
        let i = list.findIndex(el => el.company === 'none');
        let noneList;
        if (i > -1) {
            noneList = list.splice(i, 1);
        } else {
            noneList = []
        }

        return {
            none: noneList,
            list: list,
        }
    },
    othersCompanies(state,getter){
        const { othersData: { listNames } } = getter.topCompanyByUser
        return listNames
    },
    topCompanyByUser(state,getter){
        const { none, list } = getter.companyData
        const topFourColors = [ '#4bc0c0', '#ff9f40', '#36a2eb', '#ffcd56' ]
        const countUsers = (acc,cur) => {
            if(cur.hasOwnProperty('users')){
                return acc + cur.users.length
            } else {
                return acc
            }
        }


        // NONE DATA
        const noneData = {
            labels: ['None'],
            bg: ['#9966ff'],
            values: none && none.length === 0 ? 0 : none.reduce(countUsers,0)
        } 
        
        // OTHERS DATA
        const others = list.splice(topFourColors.length)
        const othersData = {
            labels: ['Others'],
            listNames: others.map(c => c.company),
            bg: ['#ff6384'],
            values: others.reduce(countUsers,0)
        }

        
        // TOP 4 Data
        
        const topData = {
            labels: list.map(c => c.company),
            bg: list.map((c,i) => topFourColors[i]),
            values: list.map(c => c.users.length)
        }

        return {
            noneData,
            othersData,
            topData
        }
    },
    dataCompanyChart(state,getter){
        let defaultValue = { 
            labels: [],
            datasets: [],
        }
        if (!getter.topCompanyByUser) return defaultValue

        const { noneData, othersData, topData } = getter.topCompanyByUser
        return { 
            labels: [ 
                    ...noneData.labels, 
                    ...othersData.labels,
                    ...topData.labels 
                ],
            datasets: [
                {
                    backgroundColor: [ 
                        ...noneData.bg, 
                        ...othersData.bg,
                        ...topData.bg 
                    ],
                    data: [
                        noneData.values, 
                        othersData.values,
                        ...topData.values 
                    ]
                },
            ],
        }
    }
}

function getCompany(obj){
    return obj.hasOwnProperty('company') ? obj.company.toLowerCase() : 'none'
} 

function formatedUserList(list){
    const formatedList = list.map(u =>{
        return{
            ...u,
            company: getCompany(u)
        }
    })
    return objToArray(groupBy(formatedList,'company'))
}

function objToArray(obj){
    return Object.keys(obj).map(key => {
        return {
            company: key,
            users: obj[key] 
        }
    }) 
}

function fSalary({ salary = '' }){
    return salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}