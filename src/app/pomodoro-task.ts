import { Component, Input, Pipe, PipeTransform, Directive, OnInit, HostListener, ViewChildren } from '@angular/core';

interface Task {
    name: string;
    deadline: Date;
    queued: boolean;
    pomodorosRequired: number;
}

class TaskService {
    public taskStore: Array<Task> = [];

    constructor() {
        const task = [
            {
                name: "Code an HTML Table",
                deadline: "Jun 23 2016",
                pomodorosRequired: 1
            },
            {
                name: "Sketch a wireframe for the new homepage",
                deadline: "Jun 24 2017",
                pomodorosRequired: 2
            },
            {
                name: "Style tyble with Bootstrap styles",
                deadline: "Jun 25 2017",
                pomodorosRequired: 1
            },
            {
                name: "Reinforce SEO with custom sitemap.xml",
                deadline: "Jun 26 2017",
                pomodorosRequired: 3
            }
        ];

        this.taskStore = task.map(task => {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                pomodorosRequired: task.pomodorosRequired
            }
        });
    }
}

@Pipe({
    name: 'pomodoroFormattedTime'
})
export class FormattedTimePipe implements PipeTransform{
    transform(totalMinutes: number): string {
        let minutes: number = totalMinutes % 60;
        let hours: number = Math.floor(totalMinutes / 60);
        return `${hours}:${minutes}m`;
    }
}
@Pipe({
    name: 'pomodoroQueuedOnly',
    pure: false
})
export class QueuedOnlyPipe implements PipeTransform{
    transform(tasks: Task[], ...args: any[]): Task[] {
        return tasks.filter((task: Task) => {
            return task.queued;
        })
    }
}

@Directive({selector:"'[task]'"})
export class TaskTooltipDirective{
    private defaultTooltipText: string;
    @Input() task: Task;
    @Input() taskTooltip: any;

    @HostListener('mouseover') onMouseOver(){
        if(!this.defaultTooltipText && this.taskTooltip) {
            this.defaultTooltipText = this.taskTooltip.innerText;
        }
        this.taskTooltip.innerText = this.task.name;
    }
    @HostListener('mouseout') onMouseOut(){
        this.taskTooltip.innerText = this.defaultTooltipText;
    }
}

@Component({
    selector: "pomodoro-task-icons",
    template: `<img 
                src="assets/img/pomodoro.png" 
                alt="" 
                *ngFor="let icon of icons" 
                width="{{size}}">`
})
export class TaskIconsComponent implements OnInit {
    @Input() task: Task;
    @Input() size: number;
    icons: Object[] = [];

    ngOnInit(){
        this.icons.length = this.task.pomodorosRequired;
        this.icons.fill({name: this.task.name});
    }
}

@Component({
    selector: 'pomodoro-tasks',
    styleUrls: ['pomodoro-tasks.css'],
    templateUrl: 'pomodoro-tasks.html',
})
export class TaskComponent{
    today: Date;
    tasks: Task[];
    queuedPomodoros: number;


    queueHeaderMapping: any = {
        '=0': 'No Pomodoros',
        '=1': 'One Pomodoros',
        'other': '# Pomodoros'
    }

    constructor(){
        const TasksService: TaskService = new TaskService();
        this.tasks = TasksService.taskStore;
        this.today = new Date();
        this.updateQueuedPomodoros();
    }

    toogleTask(task: Task): void {
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros(): void{
        this.queuedPomodoros = this.tasks
        .filter((task: Task) => task.queued)
        .reduce((pomodoros: number, queuedTask: Task) => {
            return pomodoros + queuedTask.pomodorosRequired;
        }, 0);
    }
}