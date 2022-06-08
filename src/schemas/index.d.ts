export * from './branch_protection_rule.d';
export * from './check_run.d';
export * from './check_suite.d';
export * from './code_scanning_alert.d';
export * from './commit_comment.d';
export * from './common.d';
export * from './create.d';
export * from './delete.d';
export * from './deploy_key.d';
export * from './deployment.d';
export * from './deployment_status.d';
export * from './discussion.d';
export * from './discussion_comment.d';
export * from './fork.d';
export * from './github_app_authorization.d';
export * from './gollum.d';
export * from './installation.d';
export * from './installation_repositories.d';
export * from './issue_comment.d';
export * from './issues.d';
export * from './label.d';
export * from './marketplace_purchase.d';
export * from './member.d';
export * from './membership.d';
export * from './meta.d';
export * from './milestone.d';
export * from './org_block.d';
export * from './organization.d';
export * from './package.d';
export * from './page_build.d';
export * from './ping.d';
export * from './project.d';
export * from './project_card.d';
export * from './project_column.d';
export * from './projects_v2_item.d';
export * from './public.d';
export * from './pull_request.d';
export * from './pull_request_review.d';
export * from './pull_request_review_comment.d';
export * from './pull_request_review_thread.d';
export * from './push.d';
export * from './release.d';
export * from './repository.d';
export * from './repository_dispatch.d';
export * from './repository_import.d';
export * from './repository_vulnerability_alert.d';
export * from './secret_scanning_alert.d';
export * from './security_advisory.d';
export * from './sponsorship.d';
export * from './star.d';
export * from './status.d';
export * from './team.d';
export * from './team_add.d';
export * from './watch.d';
export * from './workflow_dispatch.d';
export * from './workflow_job.d';
export * from './workflow_run.d';

import { BranchProtectionRuleEvent } from './branch_protection_rule.d';
import { CheckRunEvent } from './check_run.d';
import { CheckSuiteEvent } from './check_suite.d';
import { CodeScanningAlertEvent } from './code_scanning_alert.d';
import { CommitCommentEvent } from './commit_comment.d';
import { CreateEvent } from './create.d';
import { DeleteEvent } from './delete.d';
import { DeployKeyEvent } from './deploy_key.d';
import { DeploymentEvent } from './deployment.d';
import { DeploymentStatusEvent } from './deployment_status.d';
import { DiscussionEvent } from './discussion.d';
import { DiscussionCommentEvent } from './discussion_comment.d';
import { ForkEvent } from './fork.d';
import { GithubAppAuthorizationEvent } from './github_app_authorization.d';
import { GollumEvent } from './gollum.d';
import { InstallationEvent } from './installation.d';
import { InstallationRepositoriesEvent } from './installation_repositories.d';
import { IssueCommentEvent } from './issue_comment.d';
import { IssuesEvent } from './issues.d';
import { LabelEvent } from './label.d';
import { MarketplacePurchaseEvent } from './marketplace_purchase.d';
import { MemberEvent } from './member.d';
import { MembershipEvent } from './membership.d';
import { MetaEvent } from './meta.d';
import { MilestoneEvent } from './milestone.d';
import { OrgBlockEvent } from './org_block.d';
import { OrganizationEvent } from './organization.d';
import { PackageEvent } from './package.d';
import { PageBuildEvent } from './page_build.d';
import { PingEvent } from './ping.d';
import { ProjectEvent } from './project.d';
import { ProjectCardEvent } from './project_card.d';
import { ProjectColumnEvent } from './project_column.d';
import { ProjectsV2ItemEvent } from './projects_v2_item.d';
import { PublicEvent } from './public.d';
import { PullRequestEvent } from './pull_request.d';
import { PullRequestReviewEvent } from './pull_request_review.d';
import { PullRequestReviewCommentEvent } from './pull_request_review_comment.d';
import { PullRequestReviewThreadEvent } from './pull_request_review_thread.d';
import { PushEvent } from './push.d';
import { ReleaseEvent } from './release.d';
import { RepositoryEvent } from './repository.d';
import { RepositoryDispatchEvent } from './repository_dispatch.d';
import { RepositoryImportEvent } from './repository_import.d';
import { RepositoryVulnerabilityAlertEvent } from './repository_vulnerability_alert.d';
import { SecretScanningAlertEvent } from './secret_scanning_alert.d';
import { SecurityAdvisoryEvent } from './security_advisory.d';
import { SponsorshipEvent } from './sponsorship.d';
import { StarEvent } from './star.d';
import { StatusEvent } from './status.d';
import { TeamEvent } from './team.d';
import { TeamAddEvent } from './team_add.d';
import { WatchEvent } from './watch.d';
import { WorkflowDispatchEvent } from './workflow_dispatch.d';
import { WorkflowJobEvent } from './workflow_job.d';
import { WorkflowRunEvent } from './workflow_run.d';

export interface EventPayloadMap {
  branch_protection_rule: BranchProtectionRuleEvent;
  check_run: CheckRunEvent;
  check_suite: CheckSuiteEvent;
  code_scanning_alert: CodeScanningAlertEvent;
  commit_comment: CommitCommentEvent;
  create: CreateEvent;
  delete: DeleteEvent;
  deploy_key: DeployKeyEvent;
  deployment: DeploymentEvent;
  deployment_status: DeploymentStatusEvent;
  discussion: DiscussionEvent;
  discussion_comment: DiscussionCommentEvent;
  fork: ForkEvent;
  github_app_authorization: GithubAppAuthorizationEvent;
  gollum: GollumEvent;
  installation: InstallationEvent;
  installation_repositories: InstallationRepositoriesEvent;
  issue_comment: IssueCommentEvent;
  issues: IssuesEvent;
  label: LabelEvent;
  marketplace_purchase: MarketplacePurchaseEvent;
  member: MemberEvent;
  membership: MembershipEvent;
  meta: MetaEvent;
  milestone: MilestoneEvent;
  org_block: OrgBlockEvent;
  organization: OrganizationEvent;
  package: PackageEvent;
  page_build: PageBuildEvent;
  ping: PingEvent;
  project: ProjectEvent;
  project_card: ProjectCardEvent;
  project_column: ProjectColumnEvent;
  projects_v2_item: ProjectsV2ItemEvent;
  public: PublicEvent;
  pull_request: PullRequestEvent;
  pull_request_review: PullRequestReviewEvent;
  pull_request_review_comment: PullRequestReviewCommentEvent;
  pull_request_review_thread: PullRequestReviewThreadEvent;
  push: PushEvent;
  release: ReleaseEvent;
  repository: RepositoryEvent;
  repository_dispatch: RepositoryDispatchEvent;
  repository_import: RepositoryImportEvent;
  repository_vulnerability_alert: RepositoryVulnerabilityAlertEvent;
  secret_scanning_alert: SecretScanningAlertEvent;
  security_advisory: SecurityAdvisoryEvent;
  sponsorship: SponsorshipEvent;
  star: StarEvent;
  status: StatusEvent;
  team: TeamEvent;
  team_add: TeamAddEvent;
  watch: WatchEvent;
  workflow_dispatch: WorkflowDispatchEvent;
  workflow_job: WorkflowJobEvent;
  workflow_run: WorkflowRunEvent;
}
