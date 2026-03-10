'use client';

interface Action {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: 'orange' | 'blue' | 'primary';
  buttonText: string;
}

interface PendingActionsProps {
  actions?: Action[];
}

const defaultActions: Action[] = [
  {
    id: '1',
    title: 'Missing Photos',
    description: 'Add 3+ exterior photos to boost trust.',
    icon: 'warning',
    color: 'orange',
    buttonText: 'Add Now'
  },
  {
    id: '2',
    title: 'Update Business Hours',
    description: 'Upcoming holiday may affect hours.',
    icon: 'info',
    color: 'blue',
    buttonText: 'Check Hours'
  },
  {
    id: '3',
    title: 'Unanswered Review',
    description: '1 review waiting for response.',
    icon: 'star',
    color: 'primary',
    buttonText: 'Reply'
  }
];

export function PendingActions({ actions = defaultActions }: PendingActionsProps) {
  const borderColors = {
    orange: 'border-orange-400',
    blue: 'border-blue-400',
    primary: 'border-primary'
  };

  const iconColors = {
    orange: 'text-orange-400',
    blue: 'text-blue-400',
    primary: 'text-primary'
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <h4 className="font-bold mb-4 flex items-center justify-between">
        Pending Actions
        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
          {actions.length} Task{actions.length > 1 ? 's' : ''}
        </span>
      </h4>
      <div className="space-y-4">
        {actions.map((action) => (
          <div key={action.id} className={`flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 ${borderColors[action.color]}`}>
            <span className={`material-symbols-outlined ${iconColors[action.color]} mt-0.5`}>
              {action.icon}
            </span>
            <div>
              <p className="text-xs font-bold leading-tight">{action.title}</p>
              <p className="text-[10px] text-slate-500 mt-1">{action.description}</p>
              <button className="mt-2 text-primary text-[10px] font-bold hover:underline">
                {action.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
