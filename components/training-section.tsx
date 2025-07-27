import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, BookOpen, Award, Target } from "lucide-react"

export function TrainingSection() {
  const trainingPrograms = [
    {
      title: "Executive Leadership",
      audience: "C-Suite, VPs, Directors",
      duration: "4 hours",
      focus: "Strategic AI governance, risk oversight, ethical decision-making",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "AI Practitioners",
      audience: "Data Scientists, ML Engineers",
      duration: "16 hours",
      focus: "Responsible AI development, bias detection, model governance",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Business Users",
      audience: "Product Managers, Analysts",
      duration: "8 hours",
      focus: "AI ethics, fairness principles, governance processes",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Compliance & Legal",
      audience: "GRC, Legal, Audit Teams",
      duration: "12 hours",
      focus: "Regulatory requirements, audit procedures, risk assessment",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <div className="mt-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Training & Education Programs</h3>
        <p className="text-gray-600">
          Role-based training ensures all stakeholders understand their governance responsibilities
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {trainingPrograms.map((program, index) => {
          const IconComponent = program.icon
          return (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${program.bgColor}`}>
              <CardHeader>
                <div className="flex items-center">
                  <IconComponent className={`h-6 w-6 ${program.color} mr-3`} />
                  <div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <CardDescription className="text-sm">{program.audience}</CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    {program.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{program.focus}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Training Delivery Methods</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm text-gray-700">Interactive workshops</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm text-gray-700">Online learning modules</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm text-gray-700">Certification programs</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm text-gray-700">Case study sessions</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm text-gray-700">Regular refresher training</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm text-gray-700">Hands-on lab exercises</span>
          </div>
        </div>
      </div>
    </div>
  )
}
