import clsx from 'clsx';
import { Handle, Position, useReactFlow } from 'reactflow';
import { getNodeLabel, setNodeData } from '../../utils/flow';
import { FaUserGroup } from 'react-icons/fa6';
import Toolbar from './Toolbar';

const GroupChatManager = ({ id, selected, data }: any) => {
  const instance = useReactFlow();
  return (
    <div
      className={clsx(
        'p-2 rounded-md border text-secondary min-w-[160px] backdrop-blur-sm',
        selected
          ? 'shadow-box shadow-sky-500 bg-sky-600/90 border-sky-500'
          : 'border-sky-600 bg-sky-700/90'
      )}
    >
      <Toolbar
        nodeId={id}
        selected={selected}
        className="bg-sky-600/90 border-sky-500"
      />
      <div className="flex flex-col w-full gap-2 text-sm">
        <div className="flex items-center gap-2 text-secondary">
          <FaUserGroup className="w-5 h-5" />
          <div className="text-sm font-bold">{getNodeLabel(data.class)}</div>
        </div>
        <div className="divider my-0" />
        <div className="flex items-center justify-between text-base-content/60 gap-2">
          <div className="font-bold text-base-content/80">最大轮次</div>
          <input
            type="number"
            className="input input-sm input-bordered w-20 bg-transparent rounded"
            value={data.max_round ?? 20}
            onChange={e =>
              setNodeData(instance, id, { max_round: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between cursor-pointer label gap-2 px-0">
          <span className="label-text">用户参与</span>
          <input
            id="involve_user"
            type="checkbox"
            className="checkbox checkbox-xs bg-transparent rounded"
            checked={data.involve_user}
            onChange={e => {
              setNodeData(instance, id, { involve_user: e.target.checked });
            }}
          />
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-16 !bg-secondary"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-16 !bg-secondary"
      />
    </div>
  );
};

export default GroupChatManager;
