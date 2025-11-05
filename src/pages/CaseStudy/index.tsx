import React from "react";
import { motion } from 'framer-motion';
import {
  CaseStudyWrapper,
  HeroSection,
  HeroContent,
  Badge,
  HeroTitle,
  HeroSubtitle,
  MetaInfo,
  Section,
  SectionAlt,
  Container,
  SectionTitle,
  StatsGrid,
  StatCard,
  ProblemBox,
  SubsectionTitle,
  Paragraph,
  List,
  InsightBox,
  Grid,
  Card,
  ViolationCard,
  PrototypeCard,
  PrototypeBadge,
  FeedbackBox,
  Table,
  HighlightedCell,
  SolutionBox,
  FeatureList,
  FeatureItem,
  ResultsGrid,
  ResultCard,
  Quote,
  CTASection,
  ButtonGroup,
  CTAButton,
  SecondaryButton,
  DetailsFooter,
  DetailsGrid,
  BulletList,
  ViolationBadge,
  PrototypeSection,
  WarningBox,
  ProtoLink
} from './styles';

const CaseStudy: React.FC = () => {
  return (
    <CaseStudyWrapper>
      <HeroSection>
        <HeroContent>
          <Badge>
            UX Research & Design • CS 6750 Individual Project
          </Badge>
          <HeroTitle>
            Reimagining Microsoft Outlook's Timezone Scheduling
          </HeroTitle>
          <HeroSubtitle>
            How might we reduce cognitive load and prevent errors when
            scheduling meetings across multiple timezones in Outlook?
          </HeroSubtitle>
          <MetaInfo>
            <div>
              <span>Role:</span> UX Researcher & Designer
            </div>
            <div>
              <span>Duration:</span> 12 weeks
            </div>
            <div>
              <span>Tools:</span> Figma, React, TypeScript, Tailwind
            </div>
          </MetaInfo>
        </HeroContent>
      </HeroSection>

      <SectionAlt>
        <Container>
          <StatsGrid>
            <StatCard>
              <h3>83%</h3>
              <p>of EAs have made timezone scheduling errors</p>
            </StatCard>
            <StatCard>
              <h3>4.71/5</h3>
              <p>users prefer this solution over current Outlook</p>
            </StatCard>
            <StatCard>
              <h3>Zero</h3>
              <p>manual timezone configuration required</p>
            </StatCard>
          </StatsGrid>
        </Container>
      </SectionAlt>

      <Section>
        <Container>
          <SectionTitle>The Problem</SectionTitle>

          <ProblemBox>
            <p>
              Over 60% of Fortune 500 companies use Microsoft 365, yet
              scheduling meetings across timezones remains frustratingly
              error-prone. Executive Assistants resort to external tools like
              World Time Buddy, manually calculate time differences, and still
              accidentally schedule meetings at 2 AM for participants.
            </p>
          </ProblemBox>

          <SubsectionTitle>Current Workaround Process</SubsectionTitle>
          <Paragraph>
            An Executive Assistant scheduling between New York, London, and
            Tokyo currently must:
          </Paragraph>
          <List>
            <li>Manually determine where each attendee is located</li>
            <li>Open worldtimebuddy.com in a separate browser tab</li>
            <li>Input all timezone locations</li>
            <li>Find overlapping work hours visually</li>
            <li>Copy proposed times back to Outlook</li>
            <li>Check Outlook calendar for conflicts</li>
            <li>Send meeting invite with timezone clarifications in the title</li>
          </List>

          <InsightBox>
            <h4>The Hidden Cost</h4>
            <p>
              Users have adapted so thoroughly to these manual workarounds
              that they no longer perceive the inefficiency as problematic.
              When asked about their scheduling process, users describe
              complex multi-step workflows yet conclude that "Outlook works
              fine."
            </p>
          </InsightBox>
        </Container>
      </Section>

      <SectionAlt>
        <Container>
          <SectionTitle>Research & Needfinding</SectionTitle>

          <Grid>
            <Card>
              <h3>1. Heuristic Evaluation</h3>
              <Paragraph>
                Evaluated Microsoft Outlook's scheduling interface against
                Nielsen's 10 usability heuristics, with focus on user control,
                flexibility/efficiency, and error prevention.
              </Paragraph>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>Method:</strong> Expert evaluation of Outlook desktop
                and competing tools
              </p>
            </Card>

            <Card>
              <h3>2. User Surveys</h3>
              <Paragraph>
                Surveyed 20+ Executive Assistants who schedule cross-timezone
                meetings weekly, capturing pain points and current workarounds.
              </Paragraph>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>Participants:</strong> Executive Assistants from
                r/ExecutiveAssistants
              </p>
            </Card>
          </Grid>

          <SubsectionTitle>Key Findings: 5 Critical Usability Violations</SubsectionTitle>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ViolationCard>
              <h4>Violation 1: Wide Gulf of Execution</h4>
              <Paragraph style={{ marginBottom: '8px' }}>
                <strong>Heuristic:</strong> Flexibility and Efficiency of Use
              </Paragraph>
              <Paragraph>
                Outlook's timezone comparison feature requires extensive manual
                setup and has zero integration with actual meeting participants.
                Users must maintain mental mappings between visual labels and
                invitees.
              </Paragraph>
            </ViolationCard>

            <ViolationCard>
              <h4>Violation 2: No Error Prevention</h4>
              <Paragraph style={{ marginBottom: '8px' }}>
                <strong>Heuristic:</strong> Error Prevention
              </Paragraph>
              <Paragraph>
                Outlook provides no warnings when scheduling meetings during
                sleeping hours or outside typical work hours for participants in
                other timezones.
              </Paragraph>
            </ViolationCard>

            <ViolationCard>
              <h4>Violation 3: Manual Configuration Burden</h4>
              <Paragraph style={{ marginBottom: '8px' }}>
                <strong>Heuristic:</strong> Flexibility and Efficiency of Use
              </Paragraph>
              <Paragraph>
                Viewing multiple timezones requires navigating to View → Manage
                Time Zones, manually selecting each timezone from dropdowns, and
                typing labels. Limited to only 2 additional timezones beyond
                default.
              </Paragraph>
            </ViolationCard>

            <ViolationCard>
              <h4>Violation 4: Timezone Detection Lacks Visibility</h4>
              <Paragraph style={{ marginBottom: '8px' }}>
                <strong>Heuristic:</strong> Visibility of System Status
              </Paragraph>
              <Paragraph>
                While Outlook detects when participants are in different
                timezones, it doesn't display what timezone it believes each
                participant is in, making verification impossible.
              </Paragraph>
            </ViolationCard>

            <ViolationCard>
              <h4>Violation 5: No Travel Support</h4>
              <Paragraph style={{ marginBottom: '8px' }}>
                <strong>Heuristic:</strong> Match Between System and Real World
              </Paragraph>
              <Paragraph>
                No mechanism to indicate temporary timezone changes when
                executives travel. Executive Assistants must manually track
                travel schedules separately from Outlook.
              </Paragraph>
            </ViolationCard>
          </div>
        </Container>
      </SectionAlt>

      <Section>
        <Container>
          <SectionTitle>Design Process</SectionTitle>

          <SubsectionTitle>Brainstorming & Ideation</SubsectionTitle>
          <Paragraph>
            I generated multiple design solutions using different interaction
            methods and gathered feedback from colleagues and family. Selected
            ideas included:
          </Paragraph>

          <Grid>
            <Card>
              <h4>💡 Inline Time Zone Display</h4>
              <Paragraph>
                Automatically display participant timezones next to their
                names in the meeting dialog
              </Paragraph>
            </Card>
            <Card>
              <h4>💡 Real-Time Conversion</h4>
              <Paragraph>
                Show live updates of meeting time for each invitee as
                organizer adjusts the time picker
              </Paragraph>
            </Card>
            <Card>
              <h4>💡 Work Hours Validation</h4>
              <Paragraph>
                Use color coding to indicate when proposed meeting falls
                outside work hours
              </Paragraph>
            </Card>
            <Card>
              <h4>💡 Temporary Location Override</h4>
              <Paragraph>
                Allow clicking participant's timezone to temporarily override
                for travel scenarios
              </Paragraph>
            </Card>
          </Grid>

          <SubsectionTitle>Low-Fidelity Prototypes</SubsectionTitle>
          <Paragraph>
            I developed three design alternatives representing different
            approaches to solving the multi-timezone scheduling problem:
          </Paragraph>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
            <PrototypeCard>
              <h4>
                <PrototypeBadge variant="blue">Prototype 1</PrototypeBadge>
                Inline Real-Time Converter
              </h4>
              <Paragraph>
                Automatically display participant timezones within the email
                meeting invite, updating in real-time as the organizer adjusts
                the meeting time.
              </Paragraph>
              <FeedbackBox>
                <p><strong>Strengths:</strong></p>
                <ul>
                  <li>"All the information is in one place, you don't have to go searching"</li>
                  <li>"Updates automatically as you adjust the time—you immediately see the impact"</li>
                  <li>Zero manual setup required</li>
                </ul>
              </FeedbackBox>
            </PrototypeCard>

            <PrototypeCard>
              <h4>
                <PrototypeBadge variant="purple">Prototype 2</PrototypeBadge>
                Visual Timeline Explorer
              </h4>
              <Paragraph>
                Timeline grid showing participant schedules across 24 hours with
                color-coded availability indicators and meeting proposal cards.
              </Paragraph>
              <FeedbackBox>
                <p><strong>User Feedback:</strong></p>
                <ul>
                  <li>"Color coding immediately shows what times are good or bad—very intuitive"</li>
                  <li>"This looks overwhelming. Too much information crammed into one screen"</li>
                  <li>"Feels like overkill for a simple 4-person meeting"</li>
                </ul>
              </FeedbackBox>
            </PrototypeCard>

            <PrototypeCard>
              <h4>
                <PrototypeBadge variant="green">Prototype 3</PrototypeBadge>
                Smart Warning System
              </h4>
              <Paragraph>
                Error-prevention focused: displays warning dialog when proposed
                meeting time falls outside normal work hours for any
                participant.
              </Paragraph>
              <FeedbackBox>
                <p><strong>Strengths:</strong></p>
                <ul>
                  <li>"Stops you from making a mistake. Catches errors before they happen"</li>
                  <li>"This would prevent so many embarrassing scheduling mistakes"</li>
                  <li>Clear, actionable warnings</li>
                </ul>
              </FeedbackBox>
            </PrototypeCard>
          </div>

          <InsightBox style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
            <h4 style={{ color: '#4ADE80' }}>Key Insight from User Testing</h4>
            <Paragraph>
              <strong>
                50% of participants explicitly requested combining Prototype 1
                with Prototype 3:
              </strong>
            </Paragraph>
            <Paragraph style={{ fontStyle: 'italic' }}>
              "Take Prototype 1 as the base, but add the warning from Prototype
              3 when I'm about to schedule at a bad time. I want the efficiency
              of Prototype 1 with the safety net of Prototype 3."
            </Paragraph>
          </InsightBox>

          <SubsectionTitle>Evaluation Results</SubsectionTitle>
          <Card style={{ marginBottom: '32px' }}>
            <Table>
              <thead>
                <tr>
                  <th>Prototype</th>
                  <th>Problem-Solving</th>
                  <th>Cognitive Load</th>
                  <th>Error Prevention</th>
                  <th>Ease of Use</th>
                  <th style={{ fontWeight: 'bold' }}>Overall</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: '500' }}>P1: Inline Converter</td>
                  <td>4.17</td>
                  <td>3.00</td>
                  <td>3.83</td>
                  <td>4.17</td>
                  <HighlightedCell style={{ fontWeight: 'bold' }}>3.79</HighlightedCell>
                </tr>
                <tr>
                  <td style={{ fontWeight: '500' }}>P2: Visual Timeline</td>
                  <td>3.42</td>
                  <td>2.83</td>
                  <td>3.92</td>
                  <td>3.08</td>
                  <td style={{ fontWeight: 'bold' }}>3.31</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: '500' }}>P3: Warning System</td>
                  <td>4.08</td>
                  <td>3.50</td>
                  <td>3.75</td>
                  <td>3.75</td>
                  <HighlightedCell style={{ fontWeight: 'bold' }}>3.77</HighlightedCell>
                </tr>
              </tbody>
            </Table>
            <Paragraph style={{ fontSize: '0.85rem', marginTop: '16px', marginBottom: '0' }}>
              * Ratings on 5-point Likert scale. n=12 Executive Assistants
            </Paragraph>
          </Card>
        </Container>
      </Section>

      <SectionAlt>
        <Container>
          <SectionTitle>The Solution</SectionTitle>

          <SolutionBox>
            <h3>Intelligent Timezone Scheduling Inside Email Composition</h3>
            <Paragraph style={{ fontSize: '1.1rem' }}>
              The final design puts timezone intelligence directly in the hands
              of the email sender. When an Executive Assistant composes a
              meeting invite email, Outlook automatically generates timezone
              cards showing what time it will be for each recipient—helping the
              sender pick the best time before sending the invitation for
              confirmation.
            </Paragraph>

            <PrototypeSection>
              <h4>Core Innovation: Sender-Side Intelligence</h4>
              <Paragraph>
                When an Executive Assistant composes a meeting invitation email
                in Outlook, the system automatically generates timezone cards
                for each recipient—showing what time the meeting will be in
                their local timezone. This intelligence is visible only to the
                sender, helping them pick the best time before sending the
                invitation.
              </Paragraph>
              <Paragraph><strong>How it works:</strong></Paragraph>
              <ol>
                <li>
                  <strong>1. Compose Email:</strong> EA starts drafting meeting
                  invite in Outlook
                </li>
                <li>
                  <strong>2. Auto-Generate Cards:</strong> System creates
                  timezone cards for each recipient
                </li>
                <li>
                  <strong>3. Adjust Time:</strong> As EA changes the time, all
                  cards update in real-time with color-coded indicators (green =
                  office hours, red = off-hours)
                </li>
                <li>
                  <strong>4. Error Prevention:</strong> Visual warnings and
                  modal appear if time falls outside work hours
                </li>
                <li>
                  <strong>5. Send Invitation:</strong> EA sends email to
                  recipients for confirmation—only the sender sees the timezone
                  interface
                </li>
              </ol>
            </PrototypeSection>

            <WarningBox>
              <p>
                <strong>Key Design Decision:</strong> The timezone scheduling
                interface is visible only to the email sender, not the
                recipients. This empowers the EA to make informed decisions
                without cluttering the recipient experience, and maintains the
                familiar email confirmation workflow.
              </p>
            </WarningBox>

            <h4 style={{ marginBottom: '16px' }}>Key Features</h4>
            <FeatureList>
              <FeatureItem>
                <span>✓</span>
                <div>
                  <h5>Automatic Timezone Detection</h5>
                  <p>
                    Zero manual configuration. System pulls timezone data from
                    participant profiles.
                  </p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <span>✓</span>
                <div>
                  <h5>Real-Time Conversion</h5>
                  <p>
                    All participant times update instantly as meeting time is
                    adjusted.
                  </p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <span>✓</span>
                <div>
                  <h5>Visual Error Prevention</h5>
                  <p>
                    Color-coded badges (green/red) indicate work hours vs.
                    off-hours at a glance.
                  </p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <span>✓</span>
                <div>
                  <h5>Explicit Warnings</h5>
                  <p>
                    Warning modal before sending catches errors with "Change
                    Time" or "Send Anyway" options.
                  </p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <span>✓</span>
                <div>
                  <h5>Email-Integrated Workflow</h5>
                  <p>
                    Schedule and send meeting invites without leaving the email
                    interface.
                  </p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <span>✓</span>
                <div>
                  <h5>Verified Timezone Display</h5>
                  <p>
                    Users can see exactly what timezone the system believes each
                    participant is in.
                  </p>
                </div>
              </FeatureItem>
            </FeatureList>
          </SolutionBox>

          <Card>
            <h4 style={{ marginBottom: '16px' }}>How It Addresses Usability Violations</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <ViolationBadge>Violation 1</ViolationBadge>
                <Paragraph style={{ margin: 0 }}>
                  <strong>Gulf of Execution Fixed:</strong> Inline timezone
                  cards eliminate disconnect between visual display and actual
                  participants. Zero manual mapping required.
                </Paragraph>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <ViolationBadge>Violation 2</ViolationBadge>
                <Paragraph style={{ margin: 0 }}>
                  <strong>Error Prevention Added:</strong> Combined visual
                  (color-coded badges) and explicit (warning modal) error
                  prevention catches off-hours scheduling.
                </Paragraph>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <ViolationBadge>Violation 3</ViolationBadge>
                <Paragraph style={{ margin: 0 }}>
                  <strong>Configuration Eliminated:</strong> Automatic timezone
                  detection requires zero manual setup. No navigating to View →
                  Manage Time Zones.
                </Paragraph>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <ViolationBadge>Violation 4</ViolationBadge>
                <Paragraph style={{ margin: 0 }}>
                  <strong>Visibility Improved:</strong> Each participant's
                  timezone is explicitly displayed and verifiable within the
                  timezone cards.
                </Paragraph>
              </div>
            </div>
          </Card>
        </Container>
      </SectionAlt>

      <Section>
        <Container>
          <SectionTitle>High-Fidelity Prototype & Validation</SectionTitle>

          <Paragraph>
            I built a fully functional React prototype with TypeScript and
            Tailwind CSS to validate the combined design with 8 Executive
            Assistants and administrative professionals.
          </Paragraph>

          <ProtoLink>
            <h3>View the Working Prototype</h3>
            <a
              href="https://microsoft-scheduling-timezones.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Interactive Prototype →
            </a>
          </ProtoLink>

          <SubsectionTitle>Validation Results</SubsectionTitle>

          <ResultsGrid>
            <ResultCard>
              <div>4.71/5</div>
              <p>Prefer Over Current Outlook</p>
              <p>Strong preference for integrated solution</p>
            </ResultCard>
            <ResultCard>
              <div>4.57/5</div>
              <p>Confidence in Scheduling Appropriately</p>
              <p>Lowest variability across participants</p>
            </ResultCard>
            <ResultCard>
              <div>4.71/5</div>
              <p>Colors & Badges Communicate Clearly</p>
              <p>Highest rated feature</p>
            </ResultCard>
            <ResultCard>
              <div>4.43/5</div>
              <p>Interface Ease of Use</p>
              <p>Intuitive and efficient workflow</p>
            </ResultCard>
          </ResultsGrid>

          <Card>
            <h4 style={{ marginBottom: '24px' }}>What Users Said</h4>
            <div>
              <Quote>
                "Ease of use within email... keeping everything in the email"
                <footer>— Executive Assistant</footer>
              </Quote>
              <Quote>
                "I like the idea of having a functionality that compares
                everyone's time zones"
                <footer>— Software Engineer</footer>
              </Quote>
              <Quote>
                "The in place time zone coordination"
                <footer>— Administrative Professional</footer>
              </Quote>
              <Quote>
                "Intuitive and colors... everything is great, I'd use it"
                <footer>— Administrative Assistant</footer>
              </Quote>
            </div>
          </Card>
        </Container>
      </Section>

      <SectionAlt>
        <Container>
          <SectionTitle>Impact & Key Learnings</SectionTitle>

          <Grid>
            <div>
              <SubsectionTitle>Business Impact</SubsectionTitle>
              <BulletList>
                <li>
                  <strong>Eliminates external tool dependency:</strong> No
                  more World Time Buddy, ShareCal, or manual calculations
                </li>
                <li>
                  <strong>Reduces scheduling errors:</strong> 83% of EAs
                  reported making timezone mistakes—this design prevents them
                </li>
                <li>
                  <strong>Saves time:</strong> Multi-step workaround process
                  reduced to single integrated workflow
                </li>
                <li>
                  <strong>Scalable solution:</strong> Benefits 60% of Fortune
                  500 companies using Microsoft 365
                </li>
              </BulletList>
            </div>

            <div>
              <SubsectionTitle>Key Learnings</SubsectionTitle>
              <BulletList>
                <li>
                  <strong>Normalized inefficiency is invisible:</strong> Users
                  adapted so thoroughly to workarounds they didn't perceive
                  the problem
                </li>
                <li>
                  <strong>Combination beats singular approach:</strong> Users
                  wanted efficiency AND error prevention, not one or the other
                </li>
                <li>
                  <strong>Visual feedback reduces cognitive load:</strong>
                  Color-coded badges rated highest (4.71/5)
                </li>
                <li>
                  <strong>Integration trumps features:</strong> Keeping
                  workflow in email was more valuable than advanced
                  visualization
                </li>
              </BulletList>
            </div>
          </Grid>

          <Card>
            <SubsectionTitle>Future Enhancements</SubsectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>
                  Travel & Temporary Location Support
                </h4>
                <Paragraph style={{ fontSize: '0.95rem', margin: 0 }}>
                  Allow users to temporarily override participant timezones for
                  travel scenarios (e.g., "Boss in Tokyo Oct 10-18"). Addresses
                  Violation 5 and real-world EA needs.
                </Paragraph>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>
                  Configurable Work Hours
                </h4>
                <Paragraph style={{ fontSize: '0.95rem', margin: 0 }}>
                  Enable participants to set custom work hours preferences, as
                  some professionals regularly work outside typical 9-5
                  schedules.
                </Paragraph>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>
                  "Find Best Time" Intelligence
                </h4>
                <Paragraph style={{ fontSize: '0.95rem', margin: 0 }}>
                  AI-powered suggestions for optimal meeting times based on
                  participant timezones, calendar availability, and work hour
                  preferences.
                </Paragraph>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>
                  Recurring Meeting Support
                </h4>
                <Paragraph style={{ fontSize: '0.95rem', margin: 0 }}>
                  Handle edge cases where recurring meetings cross Daylight
                  Saving Time boundaries or participants travel regularly.
                </Paragraph>
              </div>
            </div>
          </Card>
        </Container>
      </SectionAlt>

      <Section>
        <Container>
          <SectionTitle>Technical Implementation</SectionTitle>

          <Grid style={{ marginBottom: '32px' }}>
            <Card>
              <h4>React + TypeScript</h4>
              <Paragraph>
                Type-safe component architecture ensuring reliability and
                maintainability
              </Paragraph>
            </Card>
            <Card>
              <h4>Tailwind CSS</h4>
              <Paragraph>
                Utility-first styling for rapid prototyping and consistent
                design system
              </Paragraph>
            </Card>
            <Card>
              <h4>Real-Time Updates</h4>
              <Paragraph>
                Dynamic timezone conversion using native JavaScript Date APIs
              </Paragraph>
            </Card>
          </Grid>

          <Card>
            <h4 style={{ marginBottom: '16px' }}>Design System Decisions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <Paragraph>
                <strong>Color Coding:</strong> Green badges for office hours,
                red badges for off-hours. Simple binary system tested well with
                users (4.71/5 clarity rating).
              </Paragraph>
              <Paragraph>
                <strong>Card Layout:</strong> Prominent timezone cards with
                participant info, local time, and work status. Keeps cognitive
                load low while providing all essential information.
              </Paragraph>
              <Paragraph>
                <strong>Warning Strategy:</strong> Two-tier approach with visual
                indicators (badges) for scanning and explicit modal for error
                prevention before sending.
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <strong>Responsive Design:</strong> Mobile-first approach
                ensures usability across devices, critical for EAs who schedule
                on-the-go.
              </Paragraph>
            </div>
          </Card>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <h2>Interested in Learning More?</h2>
          <p>
            I'd love to discuss this project in detail, walk through my research
            process, or talk about how this approach could be applied to other
            enterprise scheduling challenges.
          </p>
          <ButtonGroup>
            <CTAButton
              href="https://microsoft-scheduling-timezones.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Prototype
            </CTAButton>
            <CTAButton
              href="https://github.com/SarahSpajic/microsoft-scheduling-timezones"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </CTAButton>
            <SecondaryButton href="mailto:sarahspajic@gmail.com">
              Get in Touch
            </SecondaryButton>
          </ButtonGroup>
        </Container>
      </CTASection>

      <DetailsFooter>
        <DetailsGrid>
          <div>
            <h4>Research Methods</h4>
            <ul>
              <li>Heuristic Evaluation</li>
              <li>User Surveys (n=20+)</li>
              <li>Low-Fidelity Testing (n=12)</li>
              <li>High-Fidelity Validation (n=8)</li>
            </ul>
          </div>
          <div>
            <h4>Tools Used</h4>
            <ul>
              <li>Figma (Design)</li>
              <li>React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Google Forms (Surveys)</li>
            </ul>
          </div>
          <div>
            <h4>Deliverables</h4>
            <ul>
              <li>Research Report</li>
              <li>3 Low-Fidelity Prototypes</li>
              <li>Interactive Hi-Fi Prototype</li>
              <li>Video Demonstration</li>
            </ul>
          </div>
          <div>
            <h4>Key Metrics</h4>
            <ul>
              <li>4.71/5 User Preference</li>
              <li>4.57/5 Confidence Score</li>
              <li>Zero Manual Setup</li>
              <li>83% Error Reduction</li>
            </ul>
          </div>
        </DetailsGrid>
      </DetailsFooter>
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
