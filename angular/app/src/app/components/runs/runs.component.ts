import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../supabase.service';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.scss']
})
export class RunsComponent implements OnInit {
  runs: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    await this.loadRuns();
  }

  async loadRuns() {
    const { data, error } = await this.supabaseService.getRuns();
    if (error) {
      console.error('Error fetching todos:', error);
    } else {
      this.runs = data;
    }
  }
}
