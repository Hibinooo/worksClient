import { $host } from './fetch'

export const getTimes = async (id) => {
    const { data } = await $host.get('api/times', { params: { id } }
    );
    return data;
};
export const createTime = async (time) => {
    const { data } = await $host.post('api/times', time, {
        dataType: 'json'
    }
    );
    return data;
}; 
export const updateTime = async (time) => {
    const { data } = await $host.patch('api/times', time, {
        dataType: 'json'
    }
    );
    return data;
};


