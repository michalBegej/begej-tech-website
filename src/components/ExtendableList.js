import React, {useState} from 'react';

function ExtendableList({ items }) {

    const [showAll, setShowAll] = useState(false);

    return <div className='pl-2 font-normal text-slate-500 text-xs'>
        {items && items.length > 0 ? <div className='my-2 text-sky-600 font-semibold cursor-pointer' onClick={() => setShowAll(!showAll)}>{showAll ? <span>Hide</span> : <span>Show duties</span>}</div> : null}
        <ul role="list" class="list-disc pl-5 space-y-3 ">
            {items && showAll ? items.map(item => <li>{item}</li>) : null}
            
        </ul>

    </div>
}

export default ExtendableList;