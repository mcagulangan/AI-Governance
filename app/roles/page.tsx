import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Building,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Crown,
  Gavel,
  Lock,
  Brain,
  FileCheck,
  Users,
  Target,
  AlertTriangle,
  BarChart3,
  Settings,
  Award,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function RolesPage() {
  const departments = [
    {
      department: "Executive",
      responsibility: "Strategic alignment, oversight",
      icon: Crown,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      initiatives: [
        "AI Governance Charter approval",
        "Executive AI Council establishment",
        "Strategic AI roadmap alignment",
        "Budget allocation and resource planning",
      ],
      deliverables: [
        "Signed governance charter",
        "Executive oversight committee",
        "Annual AI strategy review",
        "Governance budget approval",
      ],
    },
    {
      department: "Legal & Ethics",
      responsibility: "Regulatory, policy compliance",
      icon: Gavel,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      initiatives: [
        "AI ethics framework development",
        "Regulatory compliance mapping",
        "Legal risk assessment protocols",
        "Policy documentation and updates",
      ],
      deliverables: [
        "AI ethics policy document",
        "Compliance framework matrix",
        "Legal risk assessment reports",
        "Updated governance policies",
      ],
    },
    {
      department: "IT & Security",
      responsibility: "Access, threat protection",
      icon: Lock,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      initiatives: [
        "Security architecture design",
        "Access control implementation",
        "Threat monitoring systems",
        "Infrastructure governance setup",
      ],
      deliverables: [
        "Security architecture blueprint",
        "RBAC implementation guide",
        "Threat detection dashboards",
        "Infrastructure compliance reports",
      ],
    },
    {
      department: "Data & AI",
      responsibility: "Model integrity, fairness",
      icon: Brain,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      initiatives: [
        "Model lifecycle management",
        "Bias detection and mitigation",
        "Data quality assurance",
        "AI model registry maintenance",
      ],
      deliverables: [
        "Model governance standards",
        "Bias assessment reports",
        "Data quality scorecards",
        "Model registry documentation",
      ],
    },
    {
      department: "GRC & Audit",
      responsibility: "Auditing, reporting, controls",
      icon: FileCheck,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      initiatives: [
        "Audit framework development",
        "Compliance monitoring setup",
        "Risk assessment protocols",
        "Reporting automation implementation",
      ],
      deliverables: [
        "Audit procedures manual",
        "Compliance monitoring reports",
        "Risk assessment templates",
        "Automated reporting dashboards",
      ],
    },
    {
      department: "HR & Training",
      responsibility: "Education, awareness, culture",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      initiatives: [
        "AI governance training programs",
        "Awareness campaign development",
        "Competency framework creation",
        "Culture transformation initiatives",
      ],
      deliverables: [
        "Training curriculum modules",
        "Awareness campaign materials",
        "AI competency assessments",
        "Culture change metrics",
      ],
    },
  ]

  const benefits = [
    {
      title: "Reduced Regulatory Risk",
      description: "Proactive compliance with evolving AI regulations and standards",
      icon: Shield,
      color: "text-blue-600",
      metrics: ["95% compliance score", "Zero regulatory violations", "50% faster audit cycles"],
    },
    {
      title: "Streamlined Compliance",
      description: "Automated compliance processes reduce manual overhead",
      icon: CheckCircle,
      color: "text-green-600",
      metrics: ["60% reduction in compliance effort", "Automated reporting", "Real-time monitoring"],
    },
    {
      title: "Enhanced Model Performance",
      description: "Better model quality through systematic governance practices",
      icon: TrendingUp,
      color: "text-purple-600",
      metrics: ["25% improvement in model accuracy", "90% bias detection rate", "Faster deployment cycles"],
    },
    {
      title: "Scalable & Secure",
      description: "Enterprise-grade security and scalability built into the framework",
      icon: Lock,
      color: "text-red-600",
      metrics: ["99.9% system availability", "Zero security incidents", "Multi-region deployment"],
    },
  ]

  const keyInitiatives = [
    {
      title: "AI Center of Excellence",
      description: "Establish centralized AI governance and best practices hub",
      icon: Target,
      timeline: "Q1-Q2",
      impact: "Organization-wide standardization",
    },
    {
      title: "Model Risk Management",
      description: "Comprehensive framework for identifying and mitigating AI model risks",
      icon: AlertTriangle,
      timeline: "Q2-Q3",
      impact: "Risk reduction and compliance",
    },
    {
      title: "Responsible AI Toolkit",
      description: "Deploy Azure's Responsible AI tools across all AI development teams",
      icon: Settings,
      timeline: "Q1-Q4",
      impact: "Automated bias detection and fairness",
    },
    {
      title: "Governance Dashboard",
      description: "Executive-level visibility into AI governance metrics and KPIs",
      icon: BarChart3,
      timeline: "Q3-Q4",
      impact: "Data-driven decision making",
    },
  ]

  const deliverables = [
    {
      category: "Foundation",
      items: ["AI Governance Charter", "Ethics Policy Framework", "Executive Committee Charter", "Training Curriculum"],
    },
    {
      category: "Data Governance",
      items: [
        "Data Classification Schema",
        "Access Control Matrix",
        "Data Quality Standards",
        "Privacy Protection Guidelines",
      ],
    },
    {
      category: "Model Lifecycle",
      items: [
        "Model Development Standards",
        "Testing & Validation Procedures",
        "Deployment Guidelines",
        "Monitoring Protocols",
      ],
    },
    {
      category: "Risk & Compliance",
      items: [
        "Risk Assessment Framework",
        "Compliance Monitoring System",
        "Incident Response Procedures",
        "Audit Trail Documentation",
      ],
    },
    {
      category: "Transparency & Audit",
      items: [
        "Reporting Templates",
        "Dashboard Specifications",
        "Audit Procedures Manual",
        "Stakeholder Communication Plan",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">AI Governance</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/framework" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Framework
              </Link>
              <Link href="/implementation" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Implementation
              </Link>
              <Link href="/roles" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Roles & Benefits
              </Link>
              <Link href="/next-steps" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Next Steps
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Organizational Impact</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Roles, Responsibilities &<span className="text-blue-600"> Benefits</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Clear accountability, key initiatives, and measurable value across your organization
          </p>
        </div>
      </section>

      {/* Tabs for different views */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="departments" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 mb-8">
              <TabsTrigger value="departments">Departments & Roles</TabsTrigger>
              <TabsTrigger value="org-chart">Organizational Chart</TabsTrigger>
              <TabsTrigger value="initiatives">Key Initiatives</TabsTrigger>
              <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
              <TabsTrigger value="benefits">Benefits & ROI</TabsTrigger>
            </TabsList>

            <TabsContent value="departments" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Departments & Responsibilities</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Distributed ownership with clear initiatives and deliverables for each department
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept, index) => {
                  const IconComponent = dept.icon
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-shadow ${dept.borderColor} ${dept.bgColor}`}
                    >
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <IconComponent className={`h-8 w-8 ${dept.color} mr-3`} />
                          <div>
                            <CardTitle className="text-lg">{dept.department}</CardTitle>
                            <p className="text-sm text-gray-600">{dept.responsibility}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Initiatives</h4>
                            <ul className="space-y-1">
                              {dept.initiatives.map((initiative, idx) => (
                                <li key={idx} className="text-xs text-gray-700 flex items-start">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                                  {initiative}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Deliverables</h4>
                            <ul className="space-y-1">
                              {dept.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="text-xs text-gray-700 flex items-start">
                                  <FileCheck className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="org-chart" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Governance Organizational Chart</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Key AI resources and reporting relationships across the enterprise
                </p>
              </div>

              {/* Executive Level */}
              <div className="mb-8">
                <div className="text-center mb-6">
                  <Card className="inline-block bg-purple-50 border-purple-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-center">
                        <Crown className="h-6 w-6 text-purple-600 mr-2" />
                        <CardTitle className="text-lg text-purple-800">Chief Executive Officer</CardTitle>
                      </div>
                      <p className="text-sm text-purple-700">Ultimate AI accountability</p>
                    </CardHeader>
                  </Card>
                </div>

                {/* C-Suite Level */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-center">
                        <Crown className="h-5 w-5 text-blue-600 mr-2" />
                        <CardTitle className="text-base text-blue-800">Chief Technology Officer</CardTitle>
                      </div>
                      <p className="text-xs text-blue-700 text-center">AI strategy & technology oversight</p>
                    </CardHeader>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-center">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        <CardTitle className="text-base text-green-800">Chief Risk Officer</CardTitle>
                      </div>
                      <p className="text-xs text-green-700 text-center">AI risk management</p>
                    </CardHeader>
                  </Card>

                  <Card className="bg-orange-50 border-orange-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-center">
                        <Gavel className="h-5 w-5 text-orange-600 mr-2" />
                        <CardTitle className="text-base text-orange-800">Chief Legal Officer</CardTitle>
                      </div>
                      <p className="text-xs text-orange-700 text-center">Legal & compliance oversight</p>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* AI Governance Committee */}
              <div className="mb-8">
                <div className="text-center mb-4">
                  <Badge className="bg-indigo-100 text-indigo-800 text-sm">AI Governance Committee</Badge>
                </div>
                <Card className="bg-indigo-50 border-indigo-200">
                  <CardHeader>
                    <CardTitle className="text-center text-indigo-800">AI Governance Steering Committee</CardTitle>
                    <p className="text-center text-sm text-indigo-700">Cross-functional leadership team</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-3 text-xs">
                      <div className="text-center">
                        <Users className="h-4 w-4 text-indigo-600 mx-auto mb-1" />
                        <p className="font-medium text-indigo-800">Executive Sponsor</p>
                        <p className="text-indigo-700">CTO/CRO</p>
                      </div>
                      <div className="text-center">
                        <Brain className="h-4 w-4 text-indigo-600 mx-auto mb-1" />
                        <p className="font-medium text-indigo-800">AI Ethics Lead</p>
                        <p className="text-indigo-700">Ethics Officer</p>
                      </div>
                      <div className="text-center">
                        <FileCheck className="h-4 w-4 text-indigo-600 mx-auto mb-1" />
                        <p className="font-medium text-indigo-800">Compliance Lead</p>
                        <p className="text-indigo-700">GRC Director</p>
                      </div>
                      <div className="text-center">
                        <Target className="h-4 w-4 text-indigo-600 mx-auto mb-1" />
                        <p className="font-medium text-indigo-800">Business Lead</p>
                        <p className="text-indigo-700">LOB Director</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Operational Level */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* AI Center of Excellence */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Target className="h-5 w-5 text-blue-600 mr-2" />
                      <CardTitle className="text-blue-800">AI Center of Excellence</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-xs">
                      <p className="font-medium text-blue-800 mb-1">AI Program Director</p>
                      <p className="text-blue-700">• Strategy & roadmap</p>
                      <p className="text-blue-700">• Standards development</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-blue-800 mb-1">AI Governance Manager</p>
                      <p className="text-blue-700">• Policy implementation</p>
                      <p className="text-blue-700">• Process oversight</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-blue-800 mb-1">AI Ethics Specialist</p>
                      <p className="text-blue-700">• Ethics assessments</p>
                      <p className="text-blue-700">• Bias monitoring</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Data & AI Engineering */}
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-green-600 mr-2" />
                      <CardTitle className="text-green-800">Data & AI Engineering</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-xs">
                      <p className="font-medium text-green-800 mb-1">Chief Data Officer</p>
                      <p className="text-green-700">• Data strategy</p>
                      <p className="text-green-700">• Data governance</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-green-800 mb-1">ML Engineering Lead</p>
                      <p className="text-green-700">• Model lifecycle</p>
                      <p className="text-green-700">• MLOps implementation</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-green-800 mb-1">Data Scientists</p>
                      <p className="text-green-700">• Model development</p>
                      <p className="text-green-700">• Algorithm design</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Risk & Compliance */}
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-red-600 mr-2" />
                      <CardTitle className="text-red-800">Risk & Compliance</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-xs">
                      <p className="font-medium text-red-800 mb-1">GRC Director</p>
                      <p className="text-red-700">• Risk framework</p>
                      <p className="text-red-700">• Compliance oversight</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-red-800 mb-1">AI Risk Analyst</p>
                      <p className="text-red-700">• Risk assessments</p>
                      <p className="text-red-700">• Monitoring & reporting</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-red-800 mb-1">Audit Manager</p>
                      <p className="text-red-700">• Audit planning</p>
                      <p className="text-red-700">• Compliance validation</p>
                    </div>
                  </CardContent>
                </Card>

                {/* IT Security */}
                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-purple-600 mr-2" />
                      <CardTitle className="text-purple-800">IT Security</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-xs">
                      <p className="font-medium text-purple-800 mb-1">CISO</p>
                      <p className="text-purple-700">• Security strategy</p>
                      <p className="text-purple-700">• Threat management</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-purple-800 mb-1">AI Security Specialist</p>
                      <p className="text-purple-700">• AI threat detection</p>
                      <p className="text-purple-700">• Model security</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-purple-800 mb-1">Data Protection Officer</p>
                      <p className="text-purple-700">• Privacy compliance</p>
                      <p className="text-purple-700">• Data protection</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal & Ethics */}
                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Gavel className="h-5 w-5 text-orange-600 mr-2" />
                      <CardTitle className="text-orange-800">Legal & Ethics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-xs">
                      <p className="font-medium text-orange-800 mb-1">General Counsel</p>
                      <p className="text-orange-700">• Legal oversight</p>
                      <p className="text-orange-700">• Regulatory compliance</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-orange-800 mb-1">AI Legal Counsel</p>
                      <p className="text-orange-700">• AI law expertise</p>
                      <p className="text-orange-700">• Contract review</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-orange-800 mb-1">Ethics Committee</p>
                      <p className="text-orange-700">• Ethics reviews</p>
                      <p className="text-orange-700">• Policy guidance</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Units */}
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-yellow-600 mr-2" />
                      <CardTitle className="text-yellow-800">Business Units</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-xs">
                      <p className="font-medium text-yellow-800 mb-1">LOB Directors</p>
                      <p className="text-yellow-700">• Business alignment</p>
                      <p className="text-yellow-700">• Use case prioritization</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-yellow-800 mb-1">Product Managers</p>
                      <p className="text-yellow-700">• AI product strategy</p>
                      <p className="text-yellow-700">• Requirements definition</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-yellow-800 mb-1">Business Analysts</p>
                      <p className="text-yellow-700">• Impact assessment</p>
                      <p className="text-yellow-700">• Process optimization</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reporting Relationships */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Key Reporting Relationships</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Direct Reports to CEO</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-gray-500 mr-2" />
                        CTO → AI Strategy & Technology
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-gray-500 mr-2" />
                        CRO → AI Risk Management
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-gray-500 mr-2" />
                        CLO → Legal & Compliance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Matrix Relationships</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-gray-500 mr-2" />
                        AI CoE ↔ All Business Units
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-gray-500 mr-2" />
                        GRC ↔ Data & AI Engineering
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-gray-500 mr-2" />
                        IT Security ↔ AI Development Teams
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* RACI Matrix */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  RACI Matrix - Key AI Governance Activities
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Activity</th>
                        <th className="border border-gray-300 p-2 text-center">CEO</th>
                        <th className="border border-gray-300 p-2 text-center">CTO</th>
                        <th className="border border-gray-300 p-2 text-center">CRO</th>
                        <th className="border border-gray-300 p-2 text-center">AI CoE</th>
                        <th className="border border-gray-300 p-2 text-center">Data/AI</th>
                        <th className="border border-gray-300 p-2 text-center">GRC</th>
                        <th className="border border-gray-300 p-2 text-center">Legal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">AI Strategy Development</td>
                        <td className="border border-gray-300 p-2 text-center bg-red-50">A</td>
                        <td className="border border-gray-300 p-2 text-center bg-blue-50">R</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-blue-50">R</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Model Risk Assessment</td>
                        <td className="border border-gray-300 p-2 text-center bg-green-50">I</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-red-50">A</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-blue-50">R</td>
                        <td className="border border-gray-300 p-2 text-center bg-blue-50">R</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Policy Development</td>
                        <td className="border border-gray-300 p-2 text-center bg-red-50">A</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-blue-50">R</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-blue-50">R</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Model Deployment</td>
                        <td className="border border-gray-300 p-2 text-center bg-green-50">I</td>
                        <td className="border border-gray-300 p-2 text-center bg-red-50">A</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-blue-50">R</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-green-50">I</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Compliance Monitoring</td>
                        <td className="border border-gray-300 p-2 text-center bg-green-50">I</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-red-50">A</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                        <td className="border border-gray-300 p-2 text-center bg-blue-50">R</td>
                        <td className="border border-gray-300 p-2 text-center bg-yellow-50">C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-center space-x-6 text-xs">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-50 border border-gray-300 mr-1"></div>
                    <span>R - Responsible</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-50 border border-gray-300 mr-1"></div>
                    <span>A - Accountable</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-50 border border-gray-300 mr-1"></div>
                    <span>C - Consulted</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-50 border border-gray-300 mr-1"></div>
                    <span>I - Informed</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="initiatives" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Strategic Initiatives</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Major initiatives that drive AI governance transformation across the organization
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {keyInitiatives.map((initiative, index) => {
                  const IconComponent = initiative.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start">
                          <IconComponent className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{initiative.title}</CardTitle>
                            <p className="text-gray-600 mb-4">{initiative.description}</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">{initiative.timeline}</Badge>
                              <Badge variant="secondary">{initiative.impact}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="deliverables" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Deliverables</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive deliverables organized by governance framework phase
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliverables.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-800">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <FileCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & ROI</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Measurable outcomes and return on investment from AI governance implementation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center">
                          <IconComponent className={`h-8 w-8 ${benefit.color} mr-3`} />
                          <CardTitle className="text-xl">{benefit.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-lg mb-4">{benefit.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-gray-900">Key Metrics</h4>
                          {benefit.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center">
                              <Award className="h-4 w-4 text-yellow-500 mr-2" />
                              <span className="text-sm text-gray-700">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ROI Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantified Business Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable value delivered through comprehensive AI governance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-green-200 bg-green-50">
              <CardHeader>
                <div className="text-3xl font-bold text-green-800">60%</div>
                <CardTitle className="text-lg text-green-800">Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">Reduced compliance and audit costs through automation</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="text-3xl font-bold text-blue-800">50%</div>
                <CardTitle className="text-lg text-blue-800">Faster Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">Accelerated model deployment with automated governance</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-purple-200 bg-purple-50">
              <CardHeader>
                <div className="text-3xl font-bold text-purple-800">95%</div>
                <CardTitle className="text-lg text-purple-800">Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">Proactive risk identification and mitigation effectiveness</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-orange-200 bg-orange-50">
              <CardHeader>
                <div className="text-3xl font-bold text-orange-800">25%</div>
                <CardTitle className="text-lg text-orange-800">Performance Gain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">Improved model performance through systematic governance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Impact */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Organizational Impact</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              AI Governance delivers transformational value across all business functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 rounded-lg p-4 mb-4 inline-block">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise Security</h3>
              <p className="text-blue-100 text-sm">Multi-layered protection with zero security incidents</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-lg p-4 mb-4 inline-block">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Operational Excellence</h3>
              <p className="text-blue-100 text-sm">Streamlined processes with automated compliance</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-lg p-4 mb-4 inline-block">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Business Growth</h3>
              <p className="text-blue-100 text-sm">Enhanced model quality driving business outcomes</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-lg p-4 mb-4 inline-block">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise Scale</h3>
              <p className="text-blue-100 text-sm">Scalable governance across global operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your AI Governance Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first steps toward implementing comprehensive AI governance in your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/next-steps" className="flex items-center">
                View Next Steps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/framework">Review Framework</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
