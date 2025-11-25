import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  icon: string;
  color: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const todayStats = {
    steps: 8547,
    distance: 6.2,
    activeTime: 127,
    calories: 432,
    sitting: 245
  };

  const goals: Goal[] = [
    { id: '1', title: 'Шаги', target: 10000, current: 8547, unit: 'шагов', icon: 'Footprints', color: 'text-purple-600' },
    { id: '2', title: 'Бег', target: 5, current: 3.2, unit: 'км', icon: 'Zap', color: 'text-pink-600' },
    { id: '3', title: 'Активность', target: 180, current: 127, unit: 'мин', icon: 'Activity', color: 'text-orange-600' },
    { id: '4', title: 'Калории', target: 500, current: 432, unit: 'ккал', icon: 'Flame', color: 'text-red-600' }
  ];

  const achievements: Achievement[] = [
    { id: '1', title: '10 000 шагов!', description: 'Достигнута цель по ходьбе', date: '23 ноября', icon: 'Award' },
    { id: '2', title: 'Неделя активности', description: '7 дней подряд выполнены цели', date: '20 ноября', icon: 'Trophy' },
    { id: '3', title: 'Марафонец', description: 'Пробежано 100 км за месяц', date: '15 ноября', icon: 'Medal' }
  ];

  const weeklyData = [
    { day: 'ПН', value: 85 },
    { day: 'ВТ', value: 92 },
    { day: 'СР', value: 78 },
    { day: 'ЧТ', value: 95 },
    { day: 'ПТ', value: 88 },
    { day: 'СБ', value: 100 },
    { day: 'ВС', value: 85 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Трекер Активности
              </h1>
              <p className="text-muted-foreground mt-1">Твой путь к здоровью и достижениям</p>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Settings" size={20} />
            </Button>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="dashboard" className="gap-2">
              <Icon name="Home" size={16} />
              <span className="hidden sm:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="goals" className="gap-2">
              <Icon name="Target" size={16} />
              <span className="hidden sm:inline">Цели</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="gap-2">
              <Icon name="BarChart3" size={16} />
              <span className="hidden sm:inline">Статистика</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="gap-2">
              <Icon name="Award" size={16} />
              <span className="hidden sm:inline">Достижения</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Шаги</CardTitle>
                  <Icon name="Footprints" size={20} className="text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">{todayStats.steps.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">из 10 000 цели</p>
                  <Progress value={85} className="mt-3 h-2" />
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Расстояние</CardTitle>
                  <Icon name="MapPin" size={20} className="text-pink-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-pink-600">{todayStats.distance} км</div>
                  <p className="text-xs text-muted-foreground mt-1">пройдено сегодня</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Активность</CardTitle>
                  <Icon name="Activity" size={20} className="text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">{todayStats.activeTime} мин</div>
                  <p className="text-xs text-muted-foreground mt-1">из 180 минут</p>
                  <Progress value={70} className="mt-3 h-2" />
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Калории</CardTitle>
                  <Icon name="Flame" size={20} className="text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">{todayStats.calories}</div>
                  <p className="text-xs text-muted-foreground mt-1">сожжено ккал</p>
                  <Progress value={86} className="mt-3 h-2" />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Активность за неделю
                  </CardTitle>
                  <CardDescription>Процент выполнения дневных целей</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between gap-2 h-48">
                    {weeklyData.map((day, index) => (
                      <div key={day.day} className="flex flex-col items-center gap-2 flex-1">
                        <div 
                          className="w-full bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                          style={{ 
                            height: `${day.value}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                        <span className="text-xs font-medium text-muted-foreground">{day.day}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-primary" />
                    Время сегодня
                  </CardTitle>
                  <CardDescription>Распределение активности</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-sm">Активность</span>
                      </div>
                      <span className="text-sm font-bold">{todayStats.activeTime} мин</span>
                    </div>
                    <Progress value={34} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <span className="text-sm">Пассивность</span>
                      </div>
                      <span className="text-sm font-bold">{todayStats.sitting} мин</span>
                    </div>
                    <Progress value={66} className="h-2" />
                  </div>

                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      <Icon name="AlertCircle" size={14} className="mr-1" />
                      Попробуй встать и размяться!
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {goals.map((goal, index) => {
                const progress = Math.round((goal.current / goal.target) * 100);
                const isCompleted = progress >= 100;
                
                return (
                  <Card 
                    key={goal.id} 
                    className={`hover:shadow-lg transition-all animate-scale-in ${isCompleted ? 'ring-2 ring-green-500' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 ${isCompleted ? 'animate-pulse-glow' : ''}`}>
                            <Icon name={goal.icon as any} size={24} className={goal.color} />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{goal.title}</CardTitle>
                            <CardDescription>Цель: {goal.target} {goal.unit}</CardDescription>
                          </div>
                        </div>
                        {isCompleted && (
                          <Badge className="bg-green-500">
                            <Icon name="Check" size={14} className="mr-1" />
                            Выполнено
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {goal.current}
                        </span>
                        <span className="text-muted-foreground">/ {goal.target} {goal.unit}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Прогресс</span>
                          <span className="font-bold">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-3" />
                      </div>
                      {!isCompleted && (
                        <p className="text-sm text-muted-foreground">
                          Осталось: {(goal.target - goal.current).toFixed(1)} {goal.unit}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Trophy" size={24} />
                  Продолжай в том же духе!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Ты на пути к выполнению всех целей! Осталось совсем немного — не останавливайся!
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Всего шагов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">127,430</div>
                  <p className="text-xs text-muted-foreground mt-1">за последние 30 дней</p>
                  <Badge variant="secondary" className="mt-2">
                    <Icon name="TrendingUp" size={12} className="mr-1" />
                    +12% к прошлому месяцу
                  </Badge>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Пройдено</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-pink-600">89.4 км</div>
                  <p className="text-xs text-muted-foreground mt-1">за последние 30 дней</p>
                  <Badge variant="secondary" className="mt-2">
                    <Icon name="TrendingUp" size={12} className="mr-1" />
                    +8% к прошлому месяцу
                  </Badge>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Активность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">24 дня</div>
                  <p className="text-xs text-muted-foreground mt-1">цели выполнены</p>
                  <Badge variant="secondary" className="mt-2">
                    <Icon name="Flame" size={12} className="mr-1" />
                    Серия 7 дней
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  Календарь активности
                </CardTitle>
                <CardDescription>Последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const intensity = Math.floor(Math.random() * 100);
                    let bgColor = 'bg-gray-200';
                    if (intensity > 80) bgColor = 'bg-green-600';
                    else if (intensity > 60) bgColor = 'bg-green-500';
                    else if (intensity > 40) bgColor = 'bg-green-400';
                    else if (intensity > 20) bgColor = 'bg-green-300';
                    
                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded ${bgColor} hover:ring-2 ring-primary cursor-pointer transition-all`}
                        title={`День ${i + 1}: ${intensity}%`}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <span>Меньше</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded bg-gray-200" />
                    <div className="w-4 h-4 rounded bg-green-300" />
                    <div className="w-4 h-4 rounded bg-green-400" />
                    <div className="w-4 h-4 rounded bg-green-500" />
                    <div className="w-4 h-4 rounded bg-green-600" />
                  </div>
                  <span>Больше</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <Card className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white animate-pulse-glow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">🏆</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Мастер достижений!</h3>
                    <p className="text-white/90">Получено наград: {achievements.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.id} 
                  className="hover:shadow-lg transition-all animate-scale-in hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100">
                        <Icon name={achievement.icon as any} size={24} className="text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <CardDescription className="mt-1">{achievement.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={14} />
                      <span>{achievement.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-dashed border-purple-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Lock" size={20} />
                  Скоро доступно
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Продолжай выполнять цели, чтобы разблокировать новые достижения и грамоты!
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
