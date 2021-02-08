function OrderBy() {
  return (
    <div className='sort'>
      Order by
      <select>
        <option value=''>Select</option>
        <option value='lowest'>Lowest to highest</option>
        <option value='highest'>Highest to lowest</option>
      </select>
    </div>
  );
}

export default OrderBy;
