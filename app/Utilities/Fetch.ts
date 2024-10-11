export const getExplore = async ()=>{
    try {
        const res =await fetch(`${process.env.NEXT_PUPLIC_BASE_URL}/b/4G1G`);
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error);
        
    }
}


export const getLive = async ()=>{
    try {
        const res =await fetch(`${process.env.NEXT_PUPLIC_BASE_URL}/b/VHHT`);
        const liveData = await res.json();
        return liveData
    } catch (error) {
        console.log(error);
        
    }
}


export const getSearchResult = async ()=>{
    try {
        const res =await fetch(`${process.env.NEXT_PUPLIC_BASE_URL}/b/5NPS`);
        const searchData = await res.json();
        return searchData;
    } catch (error) {
        console.log(error);
        
    }
}

