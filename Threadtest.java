import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class Threadtest extends Thread{
   
   static int value = 10;
   int threadvalue=0;
   
   public synchronized void run() {
	   value =threadvalue;
	   System.out.println(value);
    
   }
   
   public static void main(String[] args) throws InterruptedException {

      
//     Threadtest thread_1= new Threadtest();
//     Threadtest thread_2= new Threadtest();
//     Threadtest thread_3= new Threadtest();
//     
//     thread_1.threadvalue=13;
//     thread_2.threadvalue=16;
//     thread_3.threadvalue=17;
//     
//     thread_1.start();
//     thread_1.join();
//     thread_2.start();
//     thread_2.join();
//     thread_3.start();

	   
	   ExecutorService executor = Executors.newFixedThreadPool(3);

       executor.submit(() -> {
           value=13;
           System.out.println("Thread1 " + value);
       });
       executor.submit(() -> {
           value=16;
           System.out.println("Thread2 " + value);
       });
       executor.submit(() -> {
    	   value=17;
           System.out.println("Thread3 " + value);
       });
       
       executor.shutdown();
       
       
	   
   }
   
}
