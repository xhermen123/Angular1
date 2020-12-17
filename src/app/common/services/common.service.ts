import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({providedIn: "root"})
export class CommonService {
  constructor(private snackBar: MatSnackBar) {}

  toastr(message: string, duration = 2000) {
    this.snackBar.open(message, "", { duration: duration });
  }
}
