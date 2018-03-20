#bandit25
# paralel calisma ile ilgili bir seyler eklenmeli
# bazen yaniti beklemedigi icin bos yanit almis gibi davraniyor

for i in `seq -f "%04g" 0 10000`
do
    resp=$(echo "UoMYTrfrBFHyQXmg6gzctqAwOmw1IohZ $i" | nc localhost 30002)
    echo "------------------";
    echo "$resp";
    if [[ ${resp} = *"Wrong"* ]]
        then
            echo "$i failed";
        else 
            echo "$i passed"; 
            break;
        fi
done
