import os

from client import initialize as gitty_init
from colors import initialize as beautifish_init
from errors import initialize as erroristic_init

# monitoring bot -------------------------------------
from monitor import main as monitor_github_contributions

# utils ----------------------------------------------
from utils.check_authentic import check_data_authenticity
from utils.logs import help_log, command_log
# shell_icons
from utils.shell_icons import *
# templates 
from utils.templates import *


# get this file os path ------------------------------
CURR_DIR = os.path.dirname(os.path.abspath(__file__))


# clients --------------------------------------------
beautifish = beautifish_init.beautifish_initalize()
erroristic = erroristic_init.erroristic_initialize()






if __name__=='__main__':

    gitty = gitty_init.gitty_initialize()
    cmd_base_str = beautifish.blue_text("gitty$")

    try:
        while True:

            query = input(cmd_base_str)

            query_fields = query.split()
            command = query_fields[0]


            # ======================================
            # ====[ SHELL LOGS ]====================
            # ======================================

            # --help
            if command=='--help':
                log = help_log()
                print(log)
                continue


            # --commands
            if command=='--commands':
                log = command_log()
                print(log)
                continue





            # ======================================
            # ====[ AUTOMATION ]====================
            # ======================================

            # monitor_contributions
            if command=='monitor_contributions':
                monitor_github_contributions.main()
                continue




            # ======================================
            # ====[ GET DATA ]======================
            # ======================================

            # get_user_info
            if command == 'get_user_info':
                username = ""
                if len(query_fields) > 1:
                    username = query_fields[1]

                data = gitty.get_user_info(username=username)
                info = beautifish.green_text(f"[{TICK}] Response")

                res = check_data_authenticity(data=data)
                if not res:
                    no_username = template_no_such_username()
                    print(no_username)
                    continue

                headers = template_good_response(command=command,username=username)

                print(f"\n{info}\n{headers}{data}\n")
                continue


            # get_user_repositories
            elif command == 'get_user_repositories':
                username = ""
                if len(query_fields) > 1:
                    username = query_fields[1]

                data = gitty.get_user_repositories(username=username)
                info = beautifish.green_text(f"[{TICK}] Response")

                res = check_data_authenticity(data=data)
                if not res:
                    no_username = template_no_such_username()
                    print(no_username)
                    continue

                headers = template_good_response(command=command,username=username)

                print(f"\n{info}\n{headers}{data}\n")
                continue


            
            # get_daily_contributions
            elif command == 'get_daily_contributions':
                username = ""
                if len(query_fields) > 1:
                    username = query_fields[1]

                data = gitty.get_daily_contributions(username=username)
                info = beautifish.green_text(f"[{TICK}] Response")
                
                res = check_data_authenticity(data=data)
                if not res:
                    no_username = template_no_such_username()
                    print(no_username)
                    continue

                headers = template_good_response(command=command,username=username)

                print(f"\n{info}\n{headers}{data}\n")
                continue



            # get_todays_contributions
            elif command == 'get_todays_contributions':
                username = ""
                if len(query_fields) > 1:
                    username = query_fields[1]

                data = gitty.get_todays_contributions(username=username)
                info = beautifish.green_text(f"[{TICK}] Response")

                res = check_data_authenticity(data=data)
                if not res:
                    no_username = template_no_such_username()
                    print(no_username)
                    continue

                headers = template_good_response(command=command,username=username)

                print(f"\n{info}\n{headers}{data}\n")
                continue




            # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            # ERROR IN COMMAND SYNTAX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            else:
                err = erroristic.malformed_command(str=command)
                print(err)
            
    
    except KeyboardInterrupt:
        print("\n\nThank you for using Gitty! Later...\n\n")

        
    except EOFError:
        exit_msg = erroristic.shell_exit()
        print(exit_msg)
