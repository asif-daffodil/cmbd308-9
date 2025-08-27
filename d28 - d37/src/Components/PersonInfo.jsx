
const PersonInfo = ({name, age, gender, city}) => {
    return (
        <div className="border rounded-lg shadow m-5 mr-0 p-4 w-max inline-block">
            <h1>Person Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>City: {city}</p>
        </div>
    );
};

export default PersonInfo;