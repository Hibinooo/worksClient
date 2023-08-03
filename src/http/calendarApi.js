import { $host } from './fetch'

export const createWork = async (work) => {
    const { data } = await $host.post('api/work', work, {
        dataType: 'json'
    }
    );
    return data;
};
export const getWork = async (id, startdate, enddate) => {
    const { data } = await $host.get('api/work',{params: {id, startdate, enddate}}
    );
    return data;
};
