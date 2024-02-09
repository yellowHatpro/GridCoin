const Dropdown = ({list, selected, setSelected}) => {
    const handleItemChange = (event) => {
        setSelected(event.target.value);
    }
    return (
        <>
            <label>Total items:</label>
            <select className={"bg-[#15151c]"} value={selected} onChange={handleItemChange}>
                {list.map((item, idx) => (
                    <option className={"bg-[#15151c]"} key={idx} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </>
    )
}

export default Dropdown;