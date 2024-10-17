
import HighPriority from './assets/high_priority.svg';
import LowPriority from './assets/low_priority.svg';
import MediumPriority from './assets/medium_priority.svg';
import NoPriority from './assets/no_priority.svg';
import Urgent from './assets/urgent_priority_colour.svg';

import Backlog from './assets/Backlog.svg'
import Todo from './assets/to_do.svg';
import InProgress from './assets/in-progress.svg';
import Done from './assets/Done.svg';
import Cancelled from './assets/Cancelled.svg';



export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src={NoPriority} alt="No priority" width={14} />
        case "Urgent": return <img src={Urgent} alt="Urgent" width={14} />
        case "Low": return <img src={LowPriority} alt="Low priority" width={14} />
        case "Medium": return <img src={MediumPriority} alt="Medium priority" width={14} />
        case "High": return <img src={HighPriority} alt="High priority" width={14} />
        default: return <img src={Urgent} alt="Urgent" width={14} />
    }
}

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": return <img src={Backlog} alt="Backlog" width={24} />
        case "Todo": return <img src={Todo} alt="Todo" width={24} />
        case "In progress": return <img src={InProgress} alt="In progress" width={16} />
        case "Done": return <img src={Done} alt="Done" width={16} />
        case "Canceled": return <img src={Cancelled} alt="Canceled" width={16} />
        default: return <img src={Cancelled} alt="Canceled" width={16} />
    }
}
