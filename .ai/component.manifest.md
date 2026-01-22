# Component Manifest

**Every interface must have these components.**

## Tier 1: Primitives (Required)
| Component | Description | Accessibility |
|:---|:---|:---|
| `Button` | Primary, Secondary, Ghost variants | Focus ring, keyboard |
| `Input` | Text, Email, Password | Label, Error states |
| `Link` | Internal, External | Underline, focus |

## Tier 2: Layout (Required)
| Component | Description | Performance |
|:---|:---|:---|
| `Container` | Max-width wrapper | CSS only |
| `Grid` | Responsive grid | CSS Grid |
| `Stack` | Vertical/Horizontal spacing | Flexbox |

## Tier 3: Feedback (Required)
| Component | Description | States |
|:---|:---|:---|
| `Skeleton` | Loading placeholder | Pulse animation |
| `Toast` | Notification | Auto-dismiss |
| `ErrorBoundary` | Error catch | Fallback UI |

## Tier 4: Navigation (Required)
| Component | Description | Mobile |
|:---|:---|:---|
| `Navbar` | Site header | Hamburger menu |
| `Footer` | Site footer | Responsive |
| `Breadcrumb` | Path indicator | Truncation |

## Tier 5: Data Display
| Component | Description | Virtualization |
|:---|:---|:---|
| `Card` | Content container | - |
| `Table` | Data grid | Required for 100+ rows |
| `Badge` | Status indicator | - |

## Tier 6: Overlays
| Component | Description | Trap Focus |
|:---|:---|:---|
| `Modal` | Dialog | Yes |
| `Drawer` | Side panel | Yes |
| `Tooltip` | Hover info | - |

**Each component must:**
1. Use tokens (no hardcoded values)
2. Have keyboard support
3. Have Storybook story
4. Have unit test
