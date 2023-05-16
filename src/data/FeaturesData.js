import React from 'react';

import { BsFillLightbulbFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Étape 1 : Commencez à déchiqueter',
		description: 'Si vous avez raté cette partie de votre enfance et que vous vous êtes demandé comment faire du papier mâché, ce tutoriel est pour vous. Commence à déchirer les pages de vieux magazines ou journaux. Pour ce projet, j\'ai utilisé environ 5 pages. Vous pouvez utiliser n\'importe quel papier de rebut, mais les journaux et les magazines sont les plus efficaces. Plus il y a de variété, mieux c\'est. Des papiers différents, comme le papier de soie, sont acceptables, mais il ne faut pas utiliser de papier avec une finition superficielle (brillant, par exemple), car il ne collera probablement pas très bien.  Déchirer le papier en bandes plutôt que de le couper permet également de créer un bord plus absorbant, ce qui permet de coller davantage.',
    icon: iconStyle(BsFillLightbulbFill),
		imgClass: 'one',
	},
	{
		name: 'Étape 2 : Ajoutez au pot',
		description: 'Mettez toutes les bandes que vous avez déchirées dans le pot avec suffisamment d\'eau pour tout couvrir. Si vous êtes à l\'extérieur espérons que vous êtes en camping et que vous avez accès à un récipient et à de l\'eau. Sinon, vous devriez envisager de réaliser cette première étape à l\'intérieur. Remplissez le bol d\'eau chaude (non bouillante) jusqu\'à ce que le papier soit immergé. Le niveau d\'eau doit être juste suffisant pour couvrir le papier et l\'eau plus chaude devrait faire ramollir le papier plus rapidement.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Étape 3 : Retirez le papier du pot et coupez-en davantage',
		description: 'La méthode conventionnelle consiste ici à faire tremper le papier toute la nuit, pendant 8 à 12 heures. Cela donnera à la pâte une consistance plus molle, mais ce n\'est certainement pas nécessaire si vous avez un mixeur à portée de main. Une fois que les bandes sont trempées, vous pouvez les déchirer en petits morceaux pour aider votre mixeur à les broyer.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Étape 4 : Mélangez le papier dans le mixeur',
		description: 'Assurez-vous que les bords du papier sont déchirés. Mettez votre mélange dans le mixeur et mélangez de petites quantités de papier avec de l\'eau pour créer une sorte de bouillie liquéfiée. J\'ai tout mixé en 4 parties, pour ne pas endommager le mixeur. Vous devez prendre 15 à 30 secondes par mélange, en fonction de l\'épaisseur de votre papier. Si vous utilisez du papier cartonné ou du carton, vous devrez peut-être mixer le papier un peu plus longtemps. Ajoutez plus ou moins d\'eau si nécessaire pour rendre le papier lisse. Vous pouvez même ajouter de l\'amidon si vous le souhaitez, pour atteindre la consistance idéale. Après le mélange, égouttez le tout dans une passoire. Si vous n\'avez pas de tamis formel, versez la bouillie dans une passoire ou un sac en étamine, avant de le presser pour éliminer l\'excès d\'eau.  Elle aura l\'aspect suivant. La consistance doit ressembler à celle d\'une crème glacée épaisse et fondue. Mélanger le papier mâché avec les mains est également une excellente expérience sensorielle pour les enfants. Cela va devenir très salissant et nécessiter de nombreux passages au robinet pour se nettoyer les mains, mais cela fait partie du plaisir.',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Étape 5 : Préparer la pâte de colle et la mélanger',
		description: 'Versez la colle blanche ou la colle à bois dans un saladier et diluez-la avec de l\'eau pour qu\'elle devienne moins collante et plus absorbante. Un rapport de 1:1 devrait convenir. Mélangez complètement jusqu\'à ce que la colle et l\'eau soient combinées. Vous avez maintenant votre base de papier mâché ! Lorsque vous commencez à travailler avec elle, vous pouvez soit a) plonger vos mains dans la pâte combinée pré-mélangée et commencer votre travail de barbouillage, soit b) plonger votre mélange de papier séparément dans le mélange de colle à chaque fois et l\'appliquer en conséquence.',
    icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Étape 6 : Mettez la pâte dans un bol et moulez-la à la forme',
		description: 'L\'étape suivante la plus simple est, comme vous le voyez sur la photo, de simplement appliquer la pâte dans un bol et de la mouler au format.',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
  {
		name: 'Étape 7 : Laissez le moule sécher',
		description: 'Si vous vous sentez particulièrement retors, vous pouvez utiliser les projets de papier mâché de vos enfants pour des projets d\'adultes, comme des porte-revues, des porte-serviettes ou même des cadeaux à des amis ! Regardez ce que Jill a fait ! N\'est-ce pas charmant ? D\'un point de vue plus pratique et plus réaliste, les projets en papier mâché sont vraiment utiles pour des choses comme des bols à clés, des bols à bonbons ou des bols à "trucs divers". Ils peuvent être colorés et donner à votre maison une atmosphère plus chaleureuse. ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
