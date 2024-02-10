import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];

  constructor(public issueService: IssuesService) { }

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  // This prop will toggle the apprearance of the report issue form.
  showReportIssue = false;

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  selectedIssue: Issue | null = null;

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }

    this.selectedIssue = null;
  }

}
