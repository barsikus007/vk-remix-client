import { useState } from "react";


interface Props {
  obj: {
    [key: string]: any;
  };
};

interface Props2 {
  key: string;
  objkey: string;
  value: any;
  expand: boolean;
};

function ObjectExplorerJr({ objkey, value, expand }: Props2) {
  const [open, setOpen] = useState(expand);

  if (typeof value == 'object') return (
    <div style={{ marginLeft: 16 }}>
      <button style={{ backgroundColor: open ? 'grey' : 'cyan' }} onClick={() => setOpen(o => !o)}>{objkey}:</button>{' '}
      {open && Object.keys(value).map(key => <ObjectExplorerJr key={key} objkey={key} value={value[key]} expand={expand} />)}
    </div>
  )
  return <div style={{ marginLeft: 16 }}><button>{`${objkey}:`}</button> {`${value}`}</div>
}

export default function ObjectExplorer({ obj }: Props) {
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  console.log('Object.keys(obj): ', Object.keys(obj).map(key => [key, obj[key]]));
  return (
    <div style={{ border: '1px gray solid' }}>
      <button onClick={() => setOpen(o => !o)}>ObjectExplorer</button>
      <button onClick={() => {setOpen(o => !o);setExpand(o => !o)}}>Expand All</button>

      {open && <div>{Object.keys(obj).map(key => <ObjectExplorerJr key={key} objkey={key} value={obj[key]} expand={expand} />)}</div>}
    </div>
  );
}