"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Bot, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleProcess = () => {
    setIsProcessing(true)
    setTimeout(() => setIsProcessing(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <div
          className={`text-center space-y-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            
          </div>
          
        </div>

        {/* Main Notification Card */}
        <Card
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} shadow-xl border-0 bg-white/80 backdrop-blur-sm`}
        >
          <CardContent className="p-8">
            {/* Notification Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-slate-800">质量预警通知</h2>
                  <p className="text-sm text-slate-500">来自 小瑞 AI 助手</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="destructive" className="animate-pulse">
                  紧急
                </Badge>
                <Badge variant="outline" className="text-slate-600">
                  <Clock className="w-3 h-3 mr-1" />
                  {currentTime.toLocaleTimeString("zh-CN", { hour12: false })}
                </Badge>
              </div>
            </div>

            {/* Notification Content */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 mb-6 border border-slate-100">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed text-lg mb-0">
                  张经理，<span className="font-medium text-orange-600">01产线发生质量预警</span>，厂长已指示
                  <span className="font-medium text-red-600">2天内完成改善任务</span>
                  。小瑞将解决思路和AI数据分析结果发送给您，请尽快处理。
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  onClick={handleProcess}
                  disabled={isProcessing}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-6"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      处理中...
                    </>
                  ) : (
                    <>
                      查看详情
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  标记已读
                </Button>
              </div>
              <div className="text-sm text-slate-400">通知ID: RY-{Date.now().toString().slice(-6)}</div>
            </div>
          </CardContent>
        </Card>

        {/* Status Indicators */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-slate-700">系统状态</p>
              <p className="text-xs text-slate-500">正常运行</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Bot className="w-4 h-4 text-blue-500" />
              </div>
              <p className="text-sm font-medium text-slate-700">AI 助手</p>
              <p className="text-xs text-slate-500">小瑞在线</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
              </div>
              <p className="text-sm font-medium text-slate-700">待处理</p>
              <p className="text-xs text-slate-500">1 项任务</p>
            </CardContent>
          </Card>
        </div>

        {/* Floating Elements for Tech Feel */}
        <div className="fixed top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30"></div>
        <div className="fixed top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
        <div className="fixed bottom-32 left-16 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce opacity-20"></div>
      </div>
    </div>
  )
}
