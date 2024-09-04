
let Qualification = "SSC";

const names = [
    { id: 1, name: 'pongu', year: 2017 },
    { id: 2, name: 'kagul', year: 2021 },
    { id: 3, name: 'shaik', year: 2024 },
    { id: 4, name: 'jaan-mummy', year: 2019 },
    { id: 1, name: 'jannati', year: 2023 },
    { id: 1, name: 'jaan', year: 2022 }
]
const Profile = ({ name, address, age = 27 }) => {
    let verified = true;
    const obj = {
        favDish: 'tandoori chicken',
        favDestination: 'OU Road',
        favHabbit: 'Shopping'
    }
    let favTime = <div>My favoutrite time is after mid night</div>
    let favcomponent = <Face></Face>
    return (
        <div>
            <p>{name}</p>
            <p>{address}</p>
            {age}
            <Identity {...obj}>
                <Face bg='#ddd'></Face>
            </Identity>
            {verified && <Face ></Face>}
            {favTime}
            {favcomponent}
        </div>
    )
}

export default Profile

const Identity = ({ children, favDish, favDestination, favHabbit }) => {
    return (
        <div>
            {children}
            <p>Conctact no:91105535575</p>
            <p>{Qualification}</p>
            <p>{favDestination}</p>
            <p>{favDish}</p>
            <p>{favHabbit}</p>
        </div>
    )
}


const Face = ({ width = 100, isFair = true, bg }) => {
    let Years = names.map(name => <li>{name.year}</li>);
    let filteredData = names.filter(item => {
        return item.year === 2017;
    })
    let actualValue = filteredData.map(value => <li>{value.name}</li>)
    return (
        <div style={{ backgroundColor: bg }}>
            <img src="../../public/hero_img.png" alt="" width={width} />
            {isFair ? <p>She is beautiful girl</p> : <p>She is ugly</p>}
            {isFair && <p>She is a doctor</p>}
            <ul style={{ listStyle: 'none' }}>The list of years are as follows {Years}</ul>
            <ul>{actualValue}</ul>
        </div>
    )
}



