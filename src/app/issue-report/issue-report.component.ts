import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { IssueForm } from '../issue-form';

interface IssueForm {
  title: FormControl<string>;
  description: FormControl<string>;
  priority: FormControl<string>;
  type: FormControl<string>;
}

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent {
  issueForm = new FormGroup<IssueForm>({
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    priority: new FormControl('', { nonNullable: true }),
    type: new FormControl('', { nonNullable: true }),
  })
}
