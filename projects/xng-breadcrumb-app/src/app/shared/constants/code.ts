export const dashboard = `
// 'dashboard' mapped to 'my dashboard'
{
  path: 'dashboard',
  loadChildren: './dashboard/dashboard.module#DashboardModule',
  data: {
    breadcrumb: 'my dashboard'
  }
}

//-----------------------ALTERNATIVE------------------------

constructor(private breadcrumbService: BreadcrumbService) {}
this.breadcrumbService.set('dashboard', 'my dashboard');`;

export const mentorList = `
// 'mentor' mapped to 'Enabler' using BreadcrumbService set()
constructor(private breadcrumbService: BreadcrumbService) {}
this.breadcrumbService.set('mentor', 'Enabler');

//-----------------------ALTERNATIVE------------------------

{
  path: 'mentor',
  loadChildren: './mentor/mentor.module#MentorModule',
  data: { breadcrumb: 'Enabler' }
}`;

export const mentorAdd = `
// 'mentor/add' mapped to 'New' using BreadcrumbService set()
constructor(private breadcrumbService: BreadcrumbService) {}
this.breadcrumbService.set('mentor/add', 'New');

//-----------------------ALTERNATIVE------------------------

{
  path: 'add',
  component: MentorAddComponent,
  data: { breadcrumb: 'New' }
}`;

export const mentorDetails = `
// path param 'id' in 'mentor/:id' is resolved later using BreadcrumbService
{
  path: ':id',
  component: MentorDetailsComponent,
}

// In MentorDetailsComponent 'id' is resolved to Mentor Name using a server response
// Breadcrumb is updated using by passing the route path

constructor(
  private dataService: DataService,
  private breadcrumbService: BreadcrumbService
) {}

ngOnInit() {
  this.dataService.getMentor(mentorId).subscribe(mentor => {
    this.breadcrumbService.set('mentor/:id', mentor.name)
  });
}`;

export const mentorEdit = `
// Skip 'edit' in 'mentor/:id/edit' from displaying in breadcrumb
constructor(private breadcrumbService: BreadcrumbService) {}
this.breadcrumbService.set('mentor/:id/edit', { skip: true });

//-----------------------ALTERNATIVE------------------------

// use 'breadcrumb: { skip: true }' for 'mentor/:id/edit' to skip the route from displaying in breadcrumb
{
  path: 'edit',
  component: MentorEditComponent,
  data: {
    breadcrumb: { skip: true }
  }
}`;

export const menteeList = `
// 'mentee' is mapped to 'Mentee' in route configuration
{
  path: 'mentee',
  loadChildren: './mentee/mentee.module#MenteeModule',
  data: { breadcrumb: 'Mentee' }
}`;

export const menteeAdd = `
// 'mentee/add' is mapped to 'New'
{
  path: 'add',
  component: MenteeAddComponent,
  data: { breadcrumb: 'New' }
}

//-----------------------ALTERNATIVE------------------------

constructor(private breadcrumbService: BreadcrumbService) {}
this.breadcrumbService.set('mentee/add', 'New');`;

export const menteeDetails = `
// path param 'id' in 'mentee/:id' is resolved through BreadcrumbService using alias
{
  path: ':id',
  data: {
    breadcrumb: { alias: 'menteeName' }
  },
  children: [
    {
      path: '',
      component: MenteeDetailsComponent
    }
  ]
}

// In MenteeDetailsComponent 'id' is resolved to Mentee Name using a server response
// Breadcrumb is updated using BreadcrumbService.set()

constructor(
  private dataService: DataService,
  private breadcrumbService: BreadcrumbService
) {}

ngOnInit() {
  this.dataService.getMentee(menteeId).subscribe(mentee => {
    this.breadcrumbService.set('@menteeName', mentee.name)
  });
}`;

export const menteeEdit = `
// 'mentee/:id/edit' can be skipped from displaying in breadcrumb dynamically
{
  path: ':id',
  data: {
    data: { breadcrumb: { alias: 'menteeName' } }
  },
  children: [
    {
      path: 'edit',
      component: MenteeEditComponent,
      data: { breadcrumb: { alias: 'menteeEdit' } }
    }
  ]
}

//-----------------------ALTERNATIVE------------------------

// use BreadcrumbService set() method
constructor(private breadcrumbService: BreadcrumbService) {}
this.breadcrumbService.set('@menteeEdit', { skip: true });

//-----------------------ALTERNATIVE------------------------

constructor(private breadcrumbService: BreadcrumbService) {}
this.breadcrumbService.set('mentee/:id/edit', { skip: true });`;

export const connect = `
// No mapping for 'connect'. Hence breadcrumb is same as route i.e 'connect'
{
  path: 'connect',
  loadChildren: './connect/connect.module#ConnectModule',
}`;