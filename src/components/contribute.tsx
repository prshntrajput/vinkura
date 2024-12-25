import Link from 'next/link';
import { BugIcon, LightbulbIcon } from 'lucide-react';

import { getGitHubIssueUrl } from '@/lib/github';
import { Agent } from 'contentlayer/generated';

export function Contribute({ doc }: { doc: Agent }) {
  const contributeLinks = [
    {
      text: 'Report an issue',
      icon: BugIcon,
      href: getGitHubIssueUrl({
        owner: 'VinkuraAI',
        repo: 'Vinkura-docs',
        title: `[bug]: ${doc.slug}`,
        labels: ['bug', 'documentation'],
        template: 'bug_report.md',
      }),
    },
    {
      text: 'Request an Update',
      icon: LightbulbIcon,
      href: getGitHubIssueUrl({
        owner: 'VinkuraAI',
        repo: 'Vinkura-docs',
        title: `[feat]: ${doc.slug}`,
        labels: ['enhancement'],
        template: 'feature_request.md',
      }),
    },
  ];

  return (
    <div className="space-y-2">
      <p className="font-medium">Contribute</p>
      <ul className="m-0 list-none">
        {contributeLinks.map((link, index) => (
          <li key={index} className="mt-0 pt-2">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="mr-2 size-4" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
