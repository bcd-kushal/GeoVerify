
import warnings
warnings.filterwarnings("ignore")


class Color: 
    def __init__(self):
        self.RED = '\033[91m'
        self.ORANGE = '\033[38;5;214m'
        self.GREEN = '\033[92m'
        self.YELLOW = '\033[93m'
        self.BLUE = '\033[94m'
        self.DARK_BLUE = '\033[38;5;18m'
        self.PINK = '\033[38;5;207m'
        self.GRAY = '\033[38;5;245m'
        self.CYAN = '\033[38;5;51m'
        self.PURPLE = '\033[38;5;171m'
        self.END = '\033[0m'



    def red_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.RED}{str}{self.END}'

    def orange_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.ORANGE}{str}{self.END}'
    
    def green_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.GREEN}{str}{self.END}'

    def yellow_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.YELLOW}{str}{self.END}'

    def blue_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.BLUE}{str}{self.END}'
    
    def dark_blue_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.DARK_BLUE}{str}{self.END}'
    
    def pink_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.PINK}{str}{self.END}'
    
    def purple_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.PURPLE}{str}{self.END}'
    
    def gray_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.GRAY}{str}{self.END}'
    
    def cyan_text(self,str:str=""):
        if len(str)==0:
            return ""
        return f'{self.CYAN}{str}{self.END}'