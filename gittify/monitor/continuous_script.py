import time 
import logging

def main():
    logging.basicConfig(filename='output2.log',level=logging.INFO,format='%(asctime)s - %(levelname)s - %(message)s')
    
    while True:
        with open('output.txt', 'a') as file:
            file.write("Gittify wishes hola!\n")
        logging.info("Gittify wishes hola!\n")
        time.sleep(5)
    
main()
