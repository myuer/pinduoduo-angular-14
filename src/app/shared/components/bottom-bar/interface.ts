export interface IBottomBarItem {
    title: string;
    icon: string;
    link: string;
    selectedIcon: string;
}


export enum BottomBar {
    Home = 'home',
    Recommend = 'recommend',
    Category = 'category',
    Chat = 'chat',
    My = 'my',
};

export const BottomBarMap = new Map<string, number>([
    [BottomBar.Home, 0],
    [BottomBar.Recommend, 1],
    [BottomBar.Category, 2],
    [BottomBar.Chat, 3],
    [BottomBar.My, 4],
])